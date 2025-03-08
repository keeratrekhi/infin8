
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import EventCard, { EventCardProps } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

// Sample data - for a full app, this would come from an API
import { eventsData } from "@/data/events";

const EventsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("date-desc");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [currentTab, setCurrentTab] = useState("all");
  const { theme } = useTheme();
  
  // Refs for carousel scrolling
  const trendingRef = useRef<HTMLDivElement>(null);
  const upcomingRef = useRef<HTMLDivElement>(null);
  const nearbyRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "technology", label: "Technology" },
    { value: "music", label: "Music" },
    { value: "food-drinks", label: "Food & Drinks" },
    { value: "business", label: "Business" },
    { value: "wellness", label: "Wellness" },
    { value: "literature", label: "Literature" },
    { value: "sports", label: "Sports" },
    { value: "art", label: "Art" },
    { value: "education", label: "Education" },
  ];
  
  const sortOptions = [
    { value: "date-asc", label: "Date (Oldest First)" },
    { value: "date-desc", label: "Date (Newest First)" },
    { value: "attendees-asc", label: "Attendees (Low to High)" },
    { value: "attendees-desc", label: "Attendees (High to Low)" },
    { value: "alphabetical", label: "Name (A to Z)" },
  ];
  
  // Filter and sort events based on current criteria
  const filterEvents = (events: EventCardProps[]) => {
    return events
      .filter((event) => {
        const matchesSearch = 
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase());
          
        const matchesCategory = 
          selectedCategory === "all" || 
          event.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
          
        const hasPrice = true; // In a real app, you'd check if the event price is within range
        
        return matchesSearch && matchesCategory && hasPrice;
      })
      .sort((a, b) => {
        switch (sortOption) {
          case "date-asc":
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          case "date-desc":
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          case "attendees-asc":
            return a.attendees - b.attendees;
          case "attendees-desc":
            return b.attendees - a.attendees;
          case "alphabetical":
            return a.title.localeCompare(b.title);
          default:
            return 0;
        }
      });
  };
  
  const filteredEvents = filterEvents(eventsData);
  
  // Carousel scroll functions
  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (!ref.current) return;
    
    const scrollAmount = 340; // Approximate card width + margin
    const scrollPosition = direction === "left" 
      ? ref.current.scrollLeft - scrollAmount 
      : ref.current.scrollLeft + scrollAmount;
      
    ref.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    });
  };
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <h1 className="heading-2 mb-6">Discover Events</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events, locations, categories..."
                className="w-full pl-10 py-6 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Price range filter */}
        <div className="mb-10 max-w-lg mx-auto">
          <h3 className="font-semibold mb-2">Price Range</h3>
          <div className="px-3">
            <Slider
              defaultValue={[0, 100]}
              max={100}
              step={1}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
        
        {/* Tabs for different event categories */}
        <Tabs defaultValue="all" className="mb-10" onValueChange={setCurrentTab}>
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="nearby">Nearby</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-8">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No events found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search term.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <div key={event.id} onClick={() => navigate(`/events/${event.id}`)} className="cursor-pointer">
                    <EventCard {...event} />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          
          {/* Trending events carousel */}
          <TabsContent value="trending">
            <div className="relative">
              <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-10">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm shadow-sm"
                  onClick={() => scroll(trendingRef, "left")}
                >
                  <ChevronLeft />
                </Button>
              </div>
              
              <div 
                ref={trendingRef} 
                className="flex overflow-x-auto space-x-6 pb-8 pt-4 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {eventsData.slice(0, 8).map((event) => (
                  <div key={event.id} className="min-w-[320px] flex-shrink-0">
                    <div onClick={() => navigate(`/events/${event.id}`)} className="cursor-pointer">
                      <EventCard {...event} />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm shadow-sm"
                  onClick={() => scroll(trendingRef, "right")}
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
          
          {/* Upcoming events carousel */}
          <TabsContent value="upcoming">
            <div className="relative">
              <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-10">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm shadow-sm"
                  onClick={() => scroll(upcomingRef, "left")}
                >
                  <ChevronLeft />
                </Button>
              </div>
              
              <div 
                ref={upcomingRef} 
                className="flex overflow-x-auto space-x-6 pb-8 pt-4 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Sort by date for upcoming */}
                {[...eventsData]
                  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                  .slice(0, 8)
                  .map((event) => (
                    <div key={event.id} className="min-w-[320px] flex-shrink-0">
                      <div onClick={() => navigate(`/events/${event.id}`)} className="cursor-pointer">
                        <EventCard {...event} />
                      </div>
                    </div>
                  ))}
              </div>
              
              <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm shadow-sm"
                  onClick={() => scroll(upcomingRef, "right")}
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
          
          {/* Nearby events carousel */}
          <TabsContent value="nearby">
            <div className="relative">
              <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-10">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm shadow-sm"
                  onClick={() => scroll(nearbyRef, "left")}
                >
                  <ChevronLeft />
                </Button>
              </div>
              
              <div 
                ref={nearbyRef} 
                className="flex overflow-x-auto space-x-6 pb-8 pt-4 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Randomize for nearby simulation */}
                {[...eventsData]
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 8)
                  .map((event) => (
                    <div key={event.id} className="min-w-[320px] flex-shrink-0">
                      <div onClick={() => navigate(`/events/${event.id}`)} className="cursor-pointer">
                        <EventCard {...event} />
                      </div>
                    </div>
                  ))}
              </div>
              
              <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm shadow-sm"
                  onClick={() => scroll(nearbyRef, "right")}
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default EventsPage;
