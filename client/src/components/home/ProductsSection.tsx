import { motion } from "framer-motion";
import { ShoppingBasket, Star, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FishProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  origin?: string;
  isBestSeller?: boolean;
  isSeasonal?: boolean;
  isSustainable?: boolean;
}

export default function ProductsSection() {
  const products: FishProduct[] = [
    {
      id: 1,
      name: "Lake Victoria Tilapia",
      description: "Mild, white fish with a delicate, flaky texture that absorbs flavors well. Perfect for pan-frying or grilling.",
      price: "KSh 950/kg",
      origin: "Lake Victoria",
      isBestSeller: true,
      isSustainable: true,
      image: "https://cdn.pixabay.com/photo/2019/09/09/20/44/fish-4464728_1280.jpg"
    },
    {
      id: 2,
      name: "Nile Perch",
      description: "Large freshwater fish with firm, white flesh. Low in fat with a clean taste similar to snapper or grouper.",
      price: "KSh 1,350/kg",
      origin: "Nyanza Gulf",
      isSustainable: true,
      image: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      name: "African Catfish",
      description: "Distinguished by its moist texture and rich flavor. Versatile for stews, frying or smoking techniques.",
      price: "KSh 1,100/kg",
      origin: "Lake Naivasha",
      isSeasonal: true,
      image: "https://cdn.pixabay.com/photo/2019/11/06/14/32/catfish-4605224_1280.jpg"
    },
    {
      id: 4,
      name: "Rainbow Trout",
      description: "Delicate fish with distinctive pinkish flesh and a mild, sweet flavor. Perfect for baking or smoking.",
      price: "KSh 1,500/kg",
      origin: "Mt. Kenya Streams",
      isBestSeller: true,
      isSeasonal: true,
      image: "https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50 fish-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-left md:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">Our Selection</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">Today's Fresh Catch</h2>
          <div className="w-16 h-1 bg-secondary mt-4 md:mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl md:mx-auto">
            Each fish is carefully selected by our team of experts. We ensure all our products are 
            sustainably caught and handled with care throughout the journey from lake to market.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a href="#contact" className="text-white font-medium hover:underline">
                      Contact for availability
                    </a>
                  </div>
                  {product.isBestSeller && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent text-white font-medium flex items-center px-3 py-1">
                        <Star className="w-3 h-3 mr-1 fill-current" /> Best Seller
                      </Badge>
                    </div>
                  )}
                </div>
                
                <div className="p-5 flex-grow">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-heading font-semibold text-xl text-primary">{product.name}</h3>
                    <span className="text-secondary font-bold whitespace-nowrap ml-2">{product.price}</span>
                  </div>
                  
                  {product.origin && (
                    <div className="text-sm text-gray-500 mb-3">Origin: {product.origin}</div>
                  )}
                  
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {product.isSustainable && (
                      <span className="inline-flex items-center text-xs text-green-700 bg-green-50 rounded-full px-2 py-1">
                        <Award className="w-3 h-3 mr-1" /> Sustainable
                      </span>
                    )}
                    {product.isSeasonal && (
                      <span className="inline-flex items-center text-xs text-amber-700 bg-amber-50 rounded-full px-2 py-1">
                        <Clock className="w-3 h-3 mr-1" /> Seasonal
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="border-t border-gray-100 p-4">
                  <a 
                    href="#contact" 
                    className="text-accent w-full py-2 flex justify-center items-center rounded-md border border-accent/30 hover:bg-accent hover:text-white transition-colors duration-300"
                  >
                    <ShoppingBasket className="mr-2 h-4 w-4" /> 
                    Inquire About
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md shadow-md">
              View Full Price List
            </Button>
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Prices may vary based on season and availability. Please contact us for current stock.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
