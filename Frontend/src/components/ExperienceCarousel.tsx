
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Image data for the carousel
const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2070",
    alt: "Group of people standing around a display of video screens"
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070",
    alt: "People sitting down near table with assorted laptop computers"
  },
  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=2070",
    alt: "Two brown deer beside trees and mountain"
  },
  {
    url: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=2070",
    alt: "Brown antelope and zebra on field at daytime"
  },
  {
    url: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80&w=2070",
    alt: "Brown cattle in the middle of forest"
  },
  {
    url: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=2070",
    alt: "Five camels on field"
  },
  {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2070",
    alt: "People at an event gathering"
  }
];

const ExperienceCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  // Function to scroll the carousel
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      
      // Calculate next scroll position
      let scrollTo = direction === "right" 
        ? scrollLeft + clientWidth * 0.8 
        : scrollLeft - clientWidth * 0.8;
      
      // Handle loop conditions
      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 100) {
        // If scrolling right at the end, loop to start
        scrollTo = 0;
      } else if (direction === "left" && scrollLeft <= 100) {
        // If scrolling left at the start, loop to end
        scrollTo = scrollWidth - clientWidth;
      }
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
      
      // Pause auto scroll for a moment after manual navigation
      setAutoScroll(false);
      setTimeout(() => setAutoScroll(true), 5000);
    }
  };

  // Auto scroll effect
  useEffect(() => {
    if (!autoScroll) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // If near the end, smoothly reset to start
        if (scrollLeft + clientWidth >= scrollWidth - 100) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: "smooth"
          });
        } else {
          // Otherwise, continue scrolling
          scrollRef.current.scrollTo({
            left: scrollLeft + 1,
            behavior: "smooth"
          });
        }
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [autoScroll]);

  return (
    <section className="section relative overflow-hidden">
      <div className="section-inner text-center mb-20">
        <h2 className="heading-2 mb-4"> Our Previous Events</h2>
        <p className="subtitle mx-auto">
          Plan, organize, and manage your events with an intuitive platform designed to make every moment special.
        </p>
        
        <div className="relative mt-12">
          {/* Carousel container */}
          <div 
            ref={scrollRef} 
            className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
          >
            {carouselImages.map((image, index) => (
              <div 
                key={index} 
                className="min-w-[300px] md:min-w-[500px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden snap-center"
              >
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <Button 
            variant="secondary" 
            size="icon" 
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full shadow-lg bg-background/80 backdrop-blur-sm z-10 h-10 w-10"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="secondary" 
            size="icon" 
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full shadow-lg bg-background/80 backdrop-blur-sm z-10 h-10 w-10"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCarousel;
