
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedEvents from "@/components/FeaturedEvents";
import CreateEventButton from "@/components/CreateEventButton";
import Footer from "@/components/Footer";
import ExperienceCarousel from "@/components/ExperienceCarousel";



const Index = () => {
  const navigate = useNavigate();
  const {theme} = useTheme();
  useEffect(() => {
    document.title = "Eventify - Create and Discover Amazing Events";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ExperienceCarousel />
        
        <Hero />
        
        <FeaturedEvents />
        
        <section className="section">
          <div className="section-inner">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069" 
                alt="Create your own event" 
                className="w-full h-full object-cover max-h-[500px]"
              />
              {theme==='dark'?( 
                   <div className="relative z-10 py-16 px-6 md:px-12 lg:py-24 lg:px-20 text-white max-w-3xl">
                   <h2 className="heading-2 mb-4">Ready to Create Your Own Event?</h2>
                   <p className="text-white/90 text-lg md:text-xl mb-8">
                     Start planning your next gathering with our comprehensive set of tools and make it an unforgettable experience.
                   </p>
                   <button 
                     className="bg-white text-black font-medium px-8 py-3 rounded-lg hover:bg-white/90 transition-colors text-base"
                     onClick={() => navigate('/create-event')}
                   >
                     Get Started
                   </button>
                 </div>
              ):(
              <div className="relative z-10 py-16 px-6 md:px-12 lg:py-24 lg:px-20 text-black max-w-3xl">
                <h2 className="heading-2 mb-4">Ready to Create Your Own Event?</h2>
                <p className="text-black/90 text-lg md:text-xl mb-8">
                  Start planning your next gathering with our comprehensive set of tools and make it an unforgettable experience.
                </p>
                <button 
                  className="bg-black text-white font-medium px-8 py-3 rounded-lg hover:bg-white/90 transition-colors text-base"
                  onClick={() => navigate('/create-event')}
                >
                  Get Started
                </button>
              </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <CreateEventButton />
      <Footer />
    </div>
  );
};

export default Index;
