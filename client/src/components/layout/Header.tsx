import { useState, useEffect } from "react";
import { Link } from "wouter";
import { FaFish } from "react-icons/fa";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white shadow-md py-2" 
        : "bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm py-3"
    }`}>
      <div className="container mx-auto px-4">
        {/* Top bar with phone - only visible on medium screens and up */}
        <div className="hidden md:flex justify-end items-center py-1 border-b border-gray-100">
          <a href="tel:+254123456789" className="text-gray-600 text-sm hover:text-secondary flex items-center">
            <Phone className="h-3 w-3 mr-2" />
            +254 123 456 789
          </a>
          <span className="mx-3 text-gray-300">|</span>
          <span className="text-gray-600 text-sm">Fresh deliveries Monday-Saturday</span>
        </div>
        
        {/* Main navbar */}
        <div className="flex justify-between items-center py-2">
          <Link href="/" className="text-2xl font-heading font-bold text-primary flex items-center group">
            <div className="relative mr-3">
              <div className="absolute inset-0 bg-secondary rounded-full opacity-10 scale-150 group-hover:scale-[1.7] transition-all duration-300"></div>
              <FaFish className="text-secondary text-3xl relative z-10" />
            </div>
            <div>
              <span className="block text-lg leading-none">Nyanja</span>
              <span className="text-secondary text-sm font-normal tracking-widest">FISHERIES</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-heading text-sm font-medium text-primary hover:text-secondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-secondary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              Home
            </Link>
            <a href="#about" className="font-heading text-sm font-medium text-gray-700 hover:text-secondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-secondary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              Our Story
            </a>
            <a href="#products" className="font-heading text-sm font-medium text-gray-700 hover:text-secondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-secondary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              Fresh Catch
            </a>
            <a href="#visit" className="font-heading text-sm font-medium text-gray-700 hover:text-secondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-secondary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              Find Us
            </a>
            <a href="#contact">
              <Button variant="outline" className="border-accent/80 text-accent hover:text-white hover:bg-accent hover:border-accent transition-colors px-4 py-1 h-auto text-sm rounded-md ml-2">
                Contact Us
              </Button>
            </a>
            <a href="#visit">
              <Button className="bg-primary hover:bg-primary/90 transition-colors px-4 py-1 h-auto text-sm rounded-md">
                Visit Store
              </Button>
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        mobileMenuOpen ? "max-h-[400px] shadow-md border-t border-gray-100" : "max-h-0"
      }`}>
        <nav className="bg-white px-4 py-3">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className="font-heading py-2 text-primary font-medium border-b border-gray-100 pb-3" 
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="font-heading py-2 text-gray-700 font-medium" 
              onClick={closeMobileMenu}
            >
              Our Story
            </a>
            <a 
              href="#products" 
              className="font-heading py-2 text-gray-700 font-medium" 
              onClick={closeMobileMenu}
            >
              Fresh Catch
            </a>
            <a 
              href="#visit" 
              className="font-heading py-2 text-gray-700 font-medium" 
              onClick={closeMobileMenu}
            >
              Find Us
            </a>
            <a 
              href="#contact" 
              className="font-heading py-2 text-gray-700 font-medium" 
              onClick={closeMobileMenu}
            >
              Contact Us
            </a>
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
              <a 
                href="tel:+254123456789" 
                className="flex items-center justify-center bg-gray-100 text-primary font-medium rounded px-3 py-2.5" 
                onClick={closeMobileMenu}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </a>
              <a 
                href="#visit" 
                className="bg-primary text-white font-medium rounded text-center py-2.5 px-3" 
                onClick={closeMobileMenu}
              >
                Visit Store
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
