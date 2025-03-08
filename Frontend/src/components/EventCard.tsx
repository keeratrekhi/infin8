import { useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  image: string;
  category: string;
}

const EventCard = ({
  id,
  title,
  description,
  date,
  time,
  location,
  attendees,
  image,
  category
}: EventCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="group h-full">
      <div className="relative dark:bg-gray-900 bg-white rounded-lg overflow-hidden h-full flex flex-col card-hover">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-white/80 backdrop-blur-sm text-foreground hover:bg-white/90 dark:bg-gray-800/80 dark:text-gray-100 dark:hover:bg-gray-800/90">
              {category}
            </Badge>
          </div>
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {description}
          </p>
          <div className="mt-auto space-y-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              <span>{time}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span className="truncate">{location}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-2 text-primary" />
              <span>{attendees} attendees</span>
            </div>
          </div>
          <div className="pt-5 mt-5 border-t border-border">
            <Button 
              className="w-full" 
              variant="outline"
              onClick={() => navigate(`/events/${id}`)}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
