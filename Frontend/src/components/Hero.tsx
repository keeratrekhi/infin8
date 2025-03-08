
import { Button } from "@/components/ui/button";
import { Calendar, Users, Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-2xl">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-accent text-accent-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <span className="flex w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Event Planning Made Simple
                </div>
                <h1 className="heading-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Create Memorable <span className="text-primary">Experiences</span> Effortlessly
                </h1>
                <p className="subtitle mt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  Plan, organize, and manage your events with an intuitive platform designed to make every moment special.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-base"
                  onClick={() => navigate('/create-event')}
                >
                  Create an Event
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 text-base"
                  onClick={() => navigate('/events')}
                >
                  Browse Events
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-2">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-center">Easy Scheduling</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-2">
                    <Ticket className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-center">Ticket Management</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-center">Guest Lists</p>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="relative z-10 w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Event planning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute glass-card rounded-lg p-4 bottom-12 -left-8 z-20 w-64 shadow-lg animate-slide-up" style={{ animationDelay: '0.9s' }}>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Next Event</h4>
                    <p className="text-sm text-muted-foreground">Tech Conference</p>
                  </div>
                </div>
                <div className="mt-3 bg-secondary rounded p-2 text-xs">
                  <p className="font-medium">Tomorrow at 10:00 AM</p>
                  <p className="text-muted-foreground mt-1">San Francisco Convention Center</p>
                </div>
              </div>
              <div className="absolute glass-card rounded-lg p-4 top-12 -right-8 z-20 w-64 shadow-lg animate-slide-down" style={{ animationDelay: '1.2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Attendees</h4>
                    <div className="flex space-x-1 mt-1">
                      <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                      <div className="h-6 w-6 rounded-full bg-gray-400"></div>
                      <div className="h-6 w-6 rounded-full bg-gray-500"></div>
                      <div className="h-6 w-6 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs">
                        +20
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
