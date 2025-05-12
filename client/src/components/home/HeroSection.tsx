import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-28 md:pt-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] z-0"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left py-8 lg:py-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
              <span className="block md:inline">Taste the</span> <span className="text-secondary">Lake's Finest</span>
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-lg mx-auto lg:mx-0">
              From our local fishermen to your kitchen — experience the authentic flavors of freshwater fish, sustainably caught and carefully delivered.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#products">
                <Button className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto text-base font-semibold py-6 px-8 rounded-lg shadow-lg">
                  Shop Our Catch
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white w-full sm:w-auto text-base font-semibold py-6 px-8 rounded-lg shadow-lg">
                  Get In Touch
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 p-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="absolute -inset-2.5 bg-white/10 rounded-2xl blur"></div>
              <img 
                src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                alt="Fresh fish display" 
                className="relative rounded-xl object-cover w-full h-auto shadow-xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-24 bg-white rounded-t-[50px] mt-8 section-divider relative z-10"></div>
    </section>
  );
}
