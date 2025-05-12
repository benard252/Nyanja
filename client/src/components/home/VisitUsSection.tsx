import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation, Car, CalendarRange, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VisitUsSection() {
  return (
    <section id="visit" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] opacity-5"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-primary/5"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-secondary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-left md:text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">Our Location</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">Visit Our Fish Market</h2>
          <div className="w-16 h-1 bg-secondary mt-4 md:mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl md:mx-auto">
            See our premium selection in person and chat with our expert fishmongers who can help
            you select the perfect catch for any occasion
          </p>
        </motion.div>
        
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-stretch">
          <motion.div 
            className="lg:w-5/12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-md h-full">
              <Tabs defaultValue="location" className="h-full">
                <TabsList className="w-full grid grid-cols-3 mb-0 bg-gray-100 p-1 rounded-t-xl">
                  <TabsTrigger value="location" className="rounded-md data-[state=active]:bg-white">
                    Location
                  </TabsTrigger>
                  <TabsTrigger value="hours" className="rounded-md data-[state=active]:bg-white">
                    Hours
                  </TabsTrigger>
                  <TabsTrigger value="directions" className="rounded-md data-[state=active]:bg-white">
                    Directions
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="location" className="p-6 h-full">
                  <div className="flex items-start mb-6">
                    <div className="bg-secondary/10 p-2 rounded-lg text-secondary mr-4 mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-primary mb-2">Our Location</h3>
                      <p className="text-gray-700 mb-1">Fisheries Complex</p>
                      <p className="text-gray-700 mb-1">Kenyatta Avenue</p>
                      <p className="text-gray-700 mb-4">Nairobi, Kenya</p>
                      
                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                          <Button variant="outline" className="border-secondary/70 text-secondary hover:bg-secondary hover:text-white flex gap-2">
                            <Navigation className="h-4 w-4" />
                            <span>Get Directions</span>
                          </Button>
                        </a>
                        <a href="tel:+254123456789">
                          <Button variant="outline" className="border-primary/70 text-primary hover:bg-primary hover:text-white flex gap-2">
                            <Phone className="h-4 w-4" />
                            <span>Call Us</span>
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-secondary/10 p-2 rounded-lg text-secondary mr-4 mt-1">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-primary mb-2">Contact Info</h3>
                      <p className="text-gray-700 mb-1">
                        <span className="font-medium">Email:</span> info@nyanjafisheries.com
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-medium">Phone:</span> +254 123 456 789
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-medium">WhatsApp:</span> +254 123 456 790
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="hours" className="p-6 h-full">
                  <div className="flex items-start mb-6">
                    <div className="bg-secondary/10 p-2 rounded-lg text-secondary mr-4 mt-1">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-primary mb-4">Store Hours</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <div className="flex items-center">
                            <CalendarCheck className="h-4 w-4 text-secondary mr-2" />
                            <span className="font-medium">Monday - Friday</span>
                          </div>
                          <span>8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <div className="flex items-center">
                            <CalendarCheck className="h-4 w-4 text-secondary mr-2" />
                            <span className="font-medium">Saturday</span>
                          </div>
                          <span>8:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <div className="flex items-center">
                            <CalendarRange className="h-4 w-4 text-gray-400 mr-2" />
                            <span className="font-medium">Sunday</span>
                          </div>
                          <span className="text-gray-500">Closed</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-blue-50 text-blue-700 rounded-lg text-sm">
                        <p className="flex items-start">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                          </svg>
                          <span>We receive fresh deliveries every Tuesday and Friday morning. Visit us these days for the widest selection!</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="directions" className="p-6 h-full">
                  <div className="flex items-start mb-6">
                    <div className="bg-secondary/10 p-2 rounded-lg text-secondary mr-4 mt-1">
                      <Car className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-primary mb-3">Getting Here</h3>
                      <div className="space-y-4 text-gray-700">
                        <div className="space-y-1">
                          <p className="font-medium">From Downtown:</p>
                          <p className="text-sm">Head north on Kenyatta Avenue for 2.5 km. Fisheries Complex will be on your right, just past the main intersection.</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">By Public Transport:</p>
                          <p className="text-sm">Take bus routes 25 or 37 to "Fisheries Stop". We're just a 2-minute walk from the bus stop.</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Parking:</p>
                          <p className="text-sm">Free customer parking is available directly in front of our store.</p>
                        </div>
                        
                        <div className="pt-2">
                          <a 
                            href="https://maps.google.com" 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center text-secondary hover:text-primary transition-colors font-medium"
                          >
                            View detailed directions
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-7/12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 border-8 border-white rounded-lg shadow-lg transform translate-x-4 translate-y-4 z-0"></div>
              <div className="h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg relative z-10">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817090169376!2d36.81728591475356!3d-1.2833698990638215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d354b72dc5%3A0x7b28564ffc082ae!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1629896087513!5m2!1sen!2sus"
                  title="Nyanja Fisheries Location Map">
                </iframe>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-500 max-w-2xl mx-auto">
            We also offer home delivery services within Nairobi and surrounding areas.
            Contact us to arrange delivery of your favorite fresh fish products.
          </p>
          <div className="mt-6">
            <a href="#contact">
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-md">
                Contact About Delivery
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
