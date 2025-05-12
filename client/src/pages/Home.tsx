import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SlideshowSection from "@/components/home/SlideshowSection";
import ProductsSection from "@/components/home/ProductsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VisitUsSection from "@/components/home/VisitUsSection";
import ContactSection from "@/components/home/ContactSection";
import { useEffect } from "react";

export default function Home() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId || '');
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Account for fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SlideshowSection />
      <ProductsSection />
      <TestimonialsSection />
      <VisitUsSection />
      <ContactSection />
    </main>
  );
}
