
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar as CalendarIcon,
  Clock,
  Image as ImageIcon,
  MapPin,
  Users,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const CreateEventPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [image, setImage] = useState<string>("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070");
  
  const categories = [
    "Technology", "Music", "Food & Drinks", "Business", "Wellness", "Literature", "Sports", "Art", "Education"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normally we would submit this to a backend
    toast({
      title: "Event Created!",
      description: "Your event has been successfully created.",
    });
    
    // Redirect to events page
    setTimeout(() => navigate("/events"), 1500);
  };

  return (
    <>
      <Navbar />
      <div className="container max-w-4xl mx-auto py-10 px-4">
        <h1 className="heading-2 mb-6">Create New Event</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" placeholder="Enter event title" required />
              </div>
              
              <div>
                <Label htmlFor="category">Category</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label htmlFor="time">Time</Label>
                <div className="flex items-center space-x-2">
                  <Clock className="text-muted-foreground h-4 w-4" />
                  <Input 
                    id="time" 
                    type="time" 
                    className="flex-1" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="location">Location</Label>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-muted-foreground h-4 w-4" />
                  <Input 
                    id="location" 
                    placeholder="Event location" 
                    className="flex-1" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="capacity">Max Attendees</Label>
                <div className="flex items-center space-x-2">
                  <Users className="text-muted-foreground h-4 w-4" />
                  <Input 
                    id="capacity" 
                    type="number" 
                    min="1" 
                    placeholder="Maximum capacity" 
                    className="flex-1" 
                    required 
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="image">Image URL</Label>
                <div className="flex items-center space-x-2">
                  <ImageIcon className="text-muted-foreground h-4 w-4" />
                  <Input 
                    id="image" 
                    placeholder="Image URL" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="flex-1" 
                    required 
                  />
                </div>
              </div>
              
              <div className="aspect-video rounded-md overflow-hidden border mt-2">
                {image && (
                  <img 
                    src={image} 
                    alt="Event preview" 
                    className="w-full h-full object-cover" 
                  />
                )}
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your event" 
                  rows={5} 
                  className="resize-none" 
                  required 
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button type="submit">Create Event</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateEventPage;
