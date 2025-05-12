import { Link } from "wouter";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Mail, Clock, ExternalLink, Anchor, Fish, Shield } from "lucide-react";
import { FaFish } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-primary to-primary/95 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
      <div className="absolute bottom-0 right-0 opacity-5">
        <FaFish className="text-white h-64 w-64" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 gap-y-12 mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <div className="bg-white/10 p-3 rounded-xl mr-3">
                <FaFish className="text-secondary text-2xl" />
              </div>
              <div>
                <span className="block text-xl leading-none font-heading font-semibold">Nyanja</span>
                <span className="text-secondary text-sm font-normal tracking-widest">FISHERIES</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-sm">
              Since 1998, we've been providing the freshest catch from East African lakes to tables across the region, maintaining our family tradition of quality and sustainability.
            </p>
            
            <div className="flex space-x-3 mb-8">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/10 hover:bg-secondary p-2.5 rounded-full transition-colors group"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white group-hover:text-white text-sm" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/10 hover:bg-secondary p-2.5 rounded-full transition-colors group"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white group-hover:text-white text-sm" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/10 hover:bg-secondary p-2.5 rounded-full transition-colors group"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white group-hover:text-white text-sm" />
              </a>
              <a 
                href="https://wa.me/254123456789" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/10 hover:bg-secondary p-2.5 rounded-full transition-colors group"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white group-hover:text-white text-sm" />
              </a>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="font-heading text-sm font-medium mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-secondary" /> Opening Hours
              </h4>
              <div className="grid grid-cols-2 gap-1 text-sm text-gray-300">
                <div>Monday - Friday</div>
                <div>8:00 AM - 6:00 PM</div>
                <div>Saturday</div>
                <div>8:00 AM - 4:00 PM</div>
                <div>Sunday</div>
                <div>Closed</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-lg font-heading font-semibold mb-5 flex items-center">
              <Anchor className="w-4 h-4 mr-2 text-secondary" /> Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors inline-block py-1">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors inline-block py-1">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors inline-block py-1">
                  Fresh Catch
                </a>
              </li>
              <li>
                <a href="#visit" className="text-gray-300 hover:text-white transition-colors inline-block py-1">
                  Find Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors inline-block py-1">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="text-lg font-heading font-semibold mb-5 flex items-center">
              <Fish className="w-4 h-4 mr-2 text-secondary" /> Our Products
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors inline-block py-1">
                  Lake Victoria Tilapia
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors inline-block py-1">
                  Nile Perch
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors inline-block py-1">
                  African Catfish
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors inline-block py-1">
                  Rainbow Trout
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 flex items-center hover:text-white transition-colors gap-1 py-1">
                  <span>Full Price List</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="text-lg font-heading font-semibold mb-5 flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-secondary" /> Find Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300">
                <MapPin className="mt-1 mr-3 h-4 w-4 flex-shrink-0 text-gray-400" />
                <span>Fisheries Complex<br />Kenyatta Avenue<br />Nairobi, Kenya</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="mr-3 h-4 w-4 flex-shrink-0 text-gray-400" />
                <a href="tel:+254123456789" className="hover:text-white transition-colors">+254 123 456 789</a>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="mr-3 h-4 w-4 flex-shrink-0 text-gray-400" />
                <a href="mailto:info@nyanjafisheries.com" className="hover:text-white transition-colors">info@nyanjafisheries.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <Shield className="h-4 w-4 mr-2 text-secondary" />
                <span className="text-sm text-gray-300">Certified Sustainable Practices</span>
              </div>
              <p className="text-gray-400 text-xs">
                &copy; {currentYear} Nyanja Fisheries Ltd. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
