import { motion } from "framer-motion";
import { FaFish, FaTruck, FaLeaf, FaCertificate } from "react-icons/fa";

export default function AboutSection() {
  const features = [
    { 
      icon: <FaFish className="text-3xl text-secondary" />, 
      title: "Responsible Fishing", 
      desc: "Hand-selected from the cleanest waters" 
    },
    { 
      icon: <FaTruck className="text-3xl text-secondary" />, 
      title: "Same-Day Delivery", 
      desc: "Fresh catch to your door" 
    },
    { 
      icon: <FaLeaf className="text-3xl text-secondary" />, 
      title: "Lake Conservation", 
      desc: "Protecting our natural ecosystems" 
    },
    { 
      icon: <FaCertificate className="text-3xl text-secondary" />, 
      title: "Quality Standards", 
      desc: "Exceeding industry benchmarks" 
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-left md:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">The Nyanja Fisheries Story</h2>
          <div className="w-16 h-1 bg-secondary mt-4 md:mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-5/12 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573000681848-7d65d5f21b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Fishing on Lake Victoria" 
                className="rounded-lg shadow-lg w-full h-auto relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-pattern-dots opacity-10 rounded-br-lg z-0"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary/30 rounded-tl-xl z-0"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-7/12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-primary mb-5 border-b border-gray-200 pb-2 inline-block">A Family Business Since 1998</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              What began as a modest family enterprise on the shores of Lake Victoria has evolved into one of East Africa's most trusted fishing companies. Our founders, the Mwangi family, started with just two small boats and a passion for the water.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Today, three generations later, we still honor those early traditions while embracing modern sustainable practices. Our fleet has grown, but our commitment remains the same: delivering the freshest, most ethically sourced fish from lake to table.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-gray-600 mb-8">
              "Our philosophy is simple: treat the lake with respect, and it will provide for generations to come." 
              <cite className="block text-sm not-italic font-medium mt-2">— Daniel Mwangi, Founder</cite>
            </blockquote>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="mr-3">{feature.icon}</div>
                    <h4 className="font-heading font-medium text-lg">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-10">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
