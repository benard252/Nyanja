import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  image: string;
  title: string;
  description: string;
}

export default function SlideshowSection() {
  const slides: Slide[] = [
    {
      image: "https://images.unsplash.com/photo-1500839941678-aae14dbfae9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      title: "Sustainable Fishing",
      description: "Using traditional techniques that respect the environment"
    },
    {
      image: "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      title: "Market Fresh Selection",
      description: "Carefully selected and displayed for optimal freshness"
    },
    {
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      title: "From Lake to Plate",
      description: "Our fish makes for unforgettable culinary experiences"
    },
    {
      image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      title: "Quality Processing",
      description: "Ensuring perfect handling and preparation of every catch"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<number | null>(null);

  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    
    slideInterval.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  useEffect(() => {
    startSlideTimer();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startSlideTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startSlideTimer();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    startSlideTimer();
  };

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Our Gallery</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Take a look at our quality fish products and behind-the-scenes of our operations
          </p>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div 
            className="overflow-hidden rounded-xl shadow-xl"
            onMouseEnter={() => {
              if (slideInterval.current) {
                clearInterval(slideInterval.current);
              }
            }}
            onMouseLeave={startSlideTimer}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out slide-transition"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full relative">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-heading font-semibold">{slide.title}</h3>
                    <p className="text-gray-200">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slideshow Controls */}
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-primary rounded-full shadow focus:outline-none"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-primary rounded-full shadow focus:outline-none"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full focus:outline-none transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
