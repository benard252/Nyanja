import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  business?: string;
  rating: number;
  image?: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Nyanja Fisheries has been our exclusive supplier for over three years now. The consistency in quality and freshness is remarkable. The attentive service and reliable delivery have been crucial for our menu planning. Our signature lake fish dishes are customer favorites!",
      author: "James Omondi",
      position: "Executive Chef",
      business: "Lakeside Restaurant & Grill",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 5
    },
    {
      id: 2,
      text: "I've been featuring Nyanja's fish in my recipes for years. Their commitment to sustainable fishing practices aligns perfectly with my food philosophy. My followers consistently rave about how the dishes turn out when using their fresh catches — you can taste the difference in quality.",
      author: "Sarah Kamau",
      position: "Recipe Developer",
      business: "Taste of Kenya Blog",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 5
    },
    {
      id: 3,
      text: "The partnership with Nyanja Fisheries has elevated our hotel's dining experience. Their selection of lake fish is unmatched, and their ethical sourcing practices align with our sustainability goals. The dedicated account manager ensures we always have what we need for our menus.",
      author: "Michael Otieno",
      position: "Food & Beverage Director",
      business: "Lakeview Serena Hotel",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 4.5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialInterval = useRef<number | null>(null);

  const startTestimonialTimer = () => {
    if (testimonialInterval.current) {
      clearInterval(testimonialInterval.current);
    }
    
    testimonialInterval.current = window.setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
  };

  useEffect(() => {
    startTestimonialTimer();
    return () => {
      if (testimonialInterval.current) {
        clearInterval(testimonialInterval.current);
      }
    };
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    startTestimonialTimer();
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    startTestimonialTimer();
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    startTestimonialTimer();
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-current text-secondary w-4 h-4" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="text-secondary w-4 h-4" />
          <Star className="absolute top-0 left-0 fill-current text-secondary w-4 h-4 overflow-hidden" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </div>
      );
    }
    
    return stars;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary/95 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 fish-pattern"></div>
      <div className="absolute -left-20 top-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-left md:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2">Trusted by Chefs & Restaurants</h2>
          <div className="w-16 h-1 bg-secondary mt-4 md:mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out slide-transition"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                      <div className="md:col-span-1 flex justify-center">
                        <div className="relative">
                          {testimonial.image ? (
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.author} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center border-4 border-white/20 shadow-lg">
                              <span className="text-4xl font-bold text-white">
                                {testimonial.author.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-md">
                            <div className="bg-secondary rounded-full p-1">
                              <FaQuoteLeft className="text-white w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 bg-white rounded-xl shadow-xl p-8 relative">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex text-secondary">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="border-t border-gray-100 pt-4 mt-4">
                          <p className="font-heading font-semibold text-primary text-lg">
                            {testimonial.author}
                          </p>
                          <div className="flex items-center text-gray-600 text-sm">
                            <span>{testimonial.position}</span>
                            {testimonial.business && (
                              <>
                                <span className="mx-2">•</span>
                                <span className="font-medium">{testimonial.business}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4 md:px-10">
            <button
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Dots indicators */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                  index === currentTestimonial 
                    ? "bg-white scale-100 shadow-glow" 
                    : "bg-white/30 hover:bg-white/50 scale-75"
                }`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
