import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin, CalendarDays, Clock, ChevronRight, Clipboard, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  inquiryType: z.enum(["general", "wholesale", "product", "other"]).optional()
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  // Define the contact form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      inquiryType: "general"
    }
  });

  // Setup mutation for form submission
  const { mutate, isPending } = useMutation({
    mutationFn: (data: ContactFormValues) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      form.reset();
      setIsSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    }
  });

  // Form submission handler
  function onSubmit(data: ContactFormValues) {
    mutate(data);
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("info@nyanjafisheries.com");
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary/95 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary opacity-5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute bottom-20 right-20 opacity-5">
        <MapPin className="w-96 h-96" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-left md:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2">We'd Love To Hear From You</h2>
          <div className="w-16 h-1 bg-secondary mt-4 md:mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white bg-opacity-[0.03] backdrop-blur-sm rounded-xl border border-white/10 p-4 md:p-8 shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-2/5">
                <div className="bg-gradient-to-br from-secondary/90 to-secondary rounded-lg p-6 text-white h-full">
                  <h3 className="text-xl font-heading font-semibold mb-6 pb-4 border-b border-white/20">Contact Information</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Our Location</p>
                        <p className="text-white/80 text-sm">
                          Fisheries Complex<br />
                          Kenyatta Avenue<br />
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Call Us</p>
                        <a href="tel:+254123456789" className="text-white/80 hover:text-white transition-colors text-sm block">
                          +254 123 456 789
                        </a>
                        <a href="tel:+254123456790" className="text-white/80 hover:text-white transition-colors text-sm">
                          +254 123 456 790
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email Us</p>
                        <div className="flex items-center text-sm">
                          <a href="mailto:info@nyanjafisheries.com" className="text-white/80 hover:text-white transition-colors">
                            info@nyanjafisheries.com
                          </a>
                          <button 
                            onClick={copyEmail} 
                            className="ml-2 bg-white/10 hover:bg-white/20 p-1 rounded transition-colors"
                            aria-label="Copy email to clipboard"
                          >
                            {copiedToClipboard ? (
                              <Check className="h-3 w-3" />
                            ) : (
                              <Clipboard className="h-3 w-3" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Office Hours</p>
                        <p className="text-white/80 text-sm">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 8:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/20">
                    <h4 className="text-sm font-medium mb-3">Connect With Us</h4>
                    <div className="flex space-x-3">
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-white/10 hover:bg-white p-2.5 rounded-full transition-colors group"
                        aria-label="Facebook"
                      >
                        <FaFacebookF className="text-white group-hover:text-secondary text-sm" />
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-white/10 hover:bg-white p-2.5 rounded-full transition-colors group"
                        aria-label="Twitter"
                      >
                        <FaTwitter className="text-white group-hover:text-secondary text-sm" />
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-white/10 hover:bg-white p-2.5 rounded-full transition-colors group"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="text-white group-hover:text-secondary text-sm" />
                      </a>
                      <a 
                        href="https://wa.me/254123456789" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-white/10 hover:bg-white p-2.5 rounded-full transition-colors group"
                        aria-label="WhatsApp"
                      >
                        <FaWhatsapp className="text-white group-hover:text-secondary text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-3/5 relative">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 md:p-10">
                    <div className="bg-green-50 text-green-600 rounded-full p-4 mb-8">
                      <Check className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-300 mb-8 max-w-md">
                      Thank you for reaching out to Nyanja Fisheries. One of our team members will get back to you shortly. We typically respond within 24 hours during business days.
                    </p>
                    <Button 
                      className="bg-secondary hover:bg-secondary/90 text-white"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Tabs defaultValue="contact" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-8 bg-white/5">
                      <TabsTrigger value="contact" className="text-white data-[state=active]:bg-white/10">
                        Contact Us
                      </TabsTrigger>
                      <TabsTrigger value="order" className="text-white data-[state=active]:bg-white/10">
                        Order Inquiry
                      </TabsTrigger>
                      <TabsTrigger value="wholesale" className="text-white data-[state=active]:bg-white/10">
                        Wholesale
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="contact" className="mt-0">
                      <div className="text-white mb-6">
                        <h3 className="text-xl font-heading font-semibold mb-2">Send us a message</h3>
                        <p className="text-gray-300 text-sm">
                          Have a question or comment? Fill out the form below and we'll get back to you soon.
                        </p>
                      </div>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-300 text-sm font-medium">Full Name</FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-secondary focus-visible:ring-0 focus-visible:ring-offset-0" 
                                      placeholder="John Doe"
                                      disabled={isPending}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-300" />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-300 text-sm font-medium">Email Address</FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      type="email" 
                                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-secondary focus-visible:ring-0 focus-visible:ring-offset-0" 
                                      placeholder="example@email.com"
                                      disabled={isPending}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-300" />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-300 text-sm font-medium">Phone Number (Optional)</FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    type="tel" 
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-secondary focus-visible:ring-0 focus-visible:ring-offset-0" 
                                    placeholder="+254 123 456 789"
                                    disabled={isPending}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-300 text-sm font-medium">Your Message</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    {...field} 
                                    rows={5} 
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-secondary focus-visible:ring-0 focus-visible:ring-offset-0 resize-none" 
                                    placeholder="How can we help you today?"
                                    disabled={isPending}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />
                          
                          <div className="pt-2">
                            <Button 
                              type="submit" 
                              className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-2.5 rounded-lg shadow transition-colors"
                              disabled={isPending}
                            >
                              {isPending ? (
                                <span className="flex items-center">
                                  <span className="animate-spin mr-2">⟳</span> Sending...
                                </span>
                              ) : (
                                <span className="flex items-center">
                                  Send Message <ChevronRight className="ml-2 h-4 w-4" />
                                </span>
                              )}
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </TabsContent>
                    
                    <TabsContent value="order" className="mt-0">
                      <div className="text-white mb-6">
                        <h3 className="text-xl font-heading font-semibold mb-2">Product Inquiry</h3>
                        <p className="text-gray-300 text-sm">
                          Interested in our products? Let us know what you're looking for and we'll prepare a quote for you.
                        </p>
                      </div>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-300 text-sm font-medium">Full Name</FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-secondary focus-visible:ring-0 focus-visible:ring-offset-0" 
                                      placeholder="John Doe"
                                      disabled={isPending}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-300" />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-300 text-sm font-medium">Email Address</FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      type="email" 
                                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-secondary focus-visible:ring-0 focus-visible:ring-offset-0" 
                                      placeholder="example@email.com"
                                      disabled={isPending}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-300" />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-300 text-sm font-medium">Phone Number</FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      type="tel" 
                                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-secondary focus-visible:ring-0 focus-visible:ring-offset-0" 
                                      placeholder="+254 123 456 789"
                                      disabled={isPending}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-300" />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="inquiryType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-300 text-sm font-medium">Product Interest</FormLabel>
                                  <FormControl>
                                    <select
                                      {...field}
                                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white shadow-sm focus:border-secondary focus-visible:outline-none focus-visible:ring-0"
                                      disabled={isPending}
                                    >
                                      <option value="tilapia" className="bg-primary">Tilapia</option>
                                      <option value="nile-perch" className="bg-primary">Nile Perch</option>
                                      <option value="catfish" className="bg-primary">African Catfish</option>
                                      <option value="trout" className="bg-primary">Rainbow Trout</option>
                                      <option value="other" className="bg-primary">Other Products</option>
                                    </select>
                                  </FormControl>
                                  <FormMessage className="text-red-300" />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-300 text-sm font-medium">Order Details</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    {...field} 
                                    rows={5} 
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-secondary focus-visible:ring-0 focus-visible:ring-offset-0 resize-none" 
                                    placeholder="Please provide details about your order including quantity, delivery preferences, and any special requirements."
                                    disabled={isPending}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />
                          
                          <div className="pt-2">
                            <Button 
                              type="submit" 
                              className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-2.5 rounded-lg shadow transition-colors"
                              disabled={isPending}
                            >
                              {isPending ? (
                                <span className="flex items-center">
                                  <span className="animate-spin mr-2">⟳</span> Submitting...
                                </span>
                              ) : (
                                <span className="flex items-center">
                                  Request Quote <ChevronRight className="ml-2 h-4 w-4" />
                                </span>
                              )}
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </TabsContent>
                    
                    <TabsContent value="wholesale" className="mt-0">
                      <div className="text-white mb-6">
                        <h3 className="text-xl font-heading font-semibold mb-2">Wholesale Partnership</h3>
                        <p className="text-gray-300 text-sm">
                          Looking to establish a wholesale partnership? Tell us about your business and requirements.
                        </p>
                      </div>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-300 text-sm font-medium">Company Name</FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-secondary focus-visible:ring-0 focus-visible:ring-offset-0" 
                                      placeholder="Business Name"
                                      disabled={isPending}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-300" />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-300 text-sm font-medium">Business Email</FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      type="email" 
                                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-secondary focus-visible:ring-0 focus-visible:ring-offset-0" 
                                      placeholder="contact@company.com"
                                      disabled={isPending}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-300" />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-300 text-sm font-medium">Business Phone</FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    type="tel" 
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-secondary focus-visible:ring-0 focus-visible:ring-offset-0" 
                                    placeholder="+254 123 456 789"
                                    disabled={isPending}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-300 text-sm font-medium">Partnership Details</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    {...field} 
                                    rows={5} 
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-secondary focus-visible:ring-0 focus-visible:ring-offset-0 resize-none" 
                                    placeholder="Please tell us about your business, typical order volumes, and any specific requirements for a wholesale partnership."
                                    disabled={isPending}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />
                          
                          <div className="pt-2">
                            <Button 
                              type="submit" 
                              className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-2.5 rounded-lg shadow transition-colors"
                              disabled={isPending}
                            >
                              {isPending ? (
                                <span className="flex items-center">
                                  <span className="animate-spin mr-2">⟳</span> Submitting...
                                </span>
                              ) : (
                                <span className="flex items-center">
                                  Submit Inquiry <ChevronRight className="ml-2 h-4 w-4" />
                                </span>
                              )}
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </TabsContent>
                  </Tabs>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
