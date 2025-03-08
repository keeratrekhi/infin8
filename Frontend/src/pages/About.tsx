
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Eventify";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Eventify</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                Welcome to Eventify, where we make event planning and management easy, accessible, and enjoyable for everyone.
              </p>
              
              <div className="bg-card rounded-xl p-6 mb-10 shadow-sm">
                <h2 className="text-2xl font-display font-semibold mb-4">Our Mission</h2>
                <p>
                  [Add your mission statement here]
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-display font-semibold mb-4">Our Story</h2>
                  <p>
                    [Add your company story here]
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-display font-semibold mb-4">Our Values</h2>
                  <p>
                    [Add your company values here]
                  </p>
                </div>
              </div>
              
              <h2 className="text-3xl font-display font-semibold mb-6">Meet Our Team</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Team member cards - you can add actual team members later */}
                <div className="bg-card rounded-xl overflow-hidden shadow-sm">
                  <div className="h-48 bg-muted"></div>
                  <div className="p-5">
                    <h3 className="font-display font-medium text-xl mb-1">[Name]</h3>
                    <p className="text-muted-foreground mb-3">[Position]</p>
                    <p>[Short bio]</p>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl overflow-hidden shadow-sm">
                  <div className="h-48 bg-muted"></div>
                  <div className="p-5">
                    <h3 className="font-display font-medium text-xl mb-1">[Name]</h3>
                    <p className="text-muted-foreground mb-3">[Position]</p>
                    <p>[Short bio]</p>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl overflow-hidden shadow-sm">
                  <div className="h-48 bg-muted"></div>
                  <div className="p-5">
                    <h3 className="font-display font-medium text-xl mb-1">[Name]</h3>
                    <p className="text-muted-foreground mb-3">[Position]</p>
                    <p>[Short bio]</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-display font-semibold mb-6">Why Choose Eventify?</h2>
              <div className="space-y-4 mb-12">
                <p>[Add your unique selling points here]</p>
                <p>[Add more benefits and features here]</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
