import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiRouter = express.Router();
  
  // Contact form submission endpoint
  apiRouter.post("/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Return success response
      return res.status(201).json({
        success: true,
        message: "Contact message submitted successfully",
        data: contactMessage
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }
      
      // Handle other errors
      console.error("Error creating contact message:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing your request"
      });
    }
  });
  
  // Register API routes
  app.use("/api", apiRouter);

  const httpServer = createServer(app);

  return httpServer;
}

// Re-import express for the router
import express from "express";
