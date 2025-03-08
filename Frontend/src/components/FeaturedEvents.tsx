
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventCard, { EventCardProps } from "./EventCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Sample events data
const eventsData: EventCardProps[] = [
  {
    id: "1",
    title: "Tech Conference 2023",
    description: "Join us for the biggest tech conference of the year with industry leaders and innovative workshops.",
    date: "Dec 10, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "San Francisco Convention Center",
    attendees: 1200,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070",
    category: "Technology"
  },
  {
    id: "2",
    title: "Summer Music Festival",
    description: "A three-day music extravaganza featuring top artists from around the world.",
    date: "Jul 15, 2023",
    time: "12:00 PM - 11:00 PM",
    location: "Central Park, New York",
    attendees: 5000,
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=2070",
    category: "Music"
  },
  {
    id: "3",
    title: "Food & Wine Expo",
    description: "Experience exquisite cuisines and premium wines from renowned chefs and wineries.",
    date: "Sep 22, 2023",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Hotel, Chicago",
    attendees: 800,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2070",
    category: "Food & Drinks"
  },
  {
    id: "4",
    title: "Startup Pitch Competition",
    description: "Watch innovative startups pitch their ideas to top investors for funding opportunities.",
    date: "Oct 5, 2023",
    time: "2:00 PM - 6:00 PM",
    location: "Innovation Hub, Austin",
    attendees: 300,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047",
    category: "Business"
  },
  {
    id: "5",
    title: "Wellness Retreat",
    description: "A weekend of mindfulness, yoga, and wellness activities to rejuvenate your mind and body.",
    date: "Aug 12, 2023",
    time: "All day",
    location: "Mountain View Resort, Colorado",
    attendees: 150,
    image: "https://images.unsplash.com/photo-1608107811979-069a67e7bb01?auto=format&fit=crop&q=80&w=1974",
    category: "Wellness"
  },
  {
    id: "6",
    title: "Book Launch: 'The Future Is Now'",
    description: "Join bestselling author Mark Johnson as he discusses his new book about technology and society.",
    date: "Nov 18, 2023",
    time: "7:00 PM - 9:00 PM",
    location: "City Library, Seattle",
    attendees: 200,
    image: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?auto=format&fit=crop&q=80&w=1974",
    category: "Literature"
  }
];

const categories = [
  "All", "Technology", "Music", "Food & Drinks", "Business", "Wellness", "Literature"
];

const FeaturedEvents = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredEvents = selectedCategory === "All" 
    ? eventsData 
    : eventsData.filter(event => event.category === selectedCategory);

  return (
    <section className="section bg-secondary/50">
      <div className="section-inner">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4">Discover Amazing Events</h2>
          <p className="subtitle">
            Explore upcoming events that match your interests, from tech conferences to cultural festivals.
          </p>
          
          <div className="mt-8 flex items-center justify-center mb-8">
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events, locations, categories..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full px-4"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="px-8"
            onClick={() => navigate("/events")}
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
