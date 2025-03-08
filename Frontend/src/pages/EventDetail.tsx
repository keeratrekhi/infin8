
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Share2,
  Heart,
  MessageSquare,
  Calendar,
  ChevronLeft,
  CheckCircle,
  User,
  AlertCircle,
  Edit,
  Trash2,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";

// Import sample data
import { eventsData } from "@/data/events";
import { commentsData } from "@/data/comments";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isOrganizer } = useAuth();
  
  // Sample state for event views. In a real app, this would use a backend
  const [liked, setLiked] = useState(false);
  const [attending, setAttending] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(commentsData);
  
  // Find the event in our data
  const event = eventsData.find(event => event.id === id);
  
  if (!event) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-20 px-4 text-center">
          <h1 className="heading-2 mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/events")}>Browse Events</Button>
        </div>
      </>
    );
  }
  
  const handleAttend = () => {
    setAttending(!attending);
    toast({
      title: attending ? "Canceled attendance" : "You're attending!",
      description: attending 
        ? "You have successfully canceled your attendance." 
        : "You have successfully registered for this event.",
    });
  };
  
  const handleLike = () => {
    setLiked(!liked);
  };
  
  const handleShare = () => {
    // In a real app, implement sharing logic
    toast({
      title: "Share Event",
      description: "Sharing functionality would be implemented here.",
    });
  };
  
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) return;
    
    // Add comment to the state
    const newCommentObj = {
      id: `comment-${Date.now()}`,
      eventId: event.id,
      user: {
        id: "current-user",
        name: user?.name || "Guest User",
        avatar: user?.avatar || "",
      },
      content: newComment,
      date: new Date().toISOString(),
    };
    
    setComments([newCommentObj, ...comments]);
    setNewComment("");
    
    toast({
      title: "Comment Added",
      description: "Your comment has been added successfully.",
    });
  };
  
  return (
    <>
      <Navbar />
      <div>
        {/* Event Hero Header */}
        <div 
          className="relative h-80 md:h-96 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${event.image})`,
            backgroundPosition: 'center 30%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="container mx-auto h-full relative">
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back
            </Button>
            
            <div className="absolute bottom-8 left-4 right-4">
              <Badge className="mb-4">{event.category}</Badge>
              <h1 className="heading-1 text-white mb-2">{event.title}</h1>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex flex-wrap gap-4 justify-between items-center">
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLike}
                    className={cn(liked && "text-red-500")}
                  >
                    <Heart className={cn("mr-1 h-4 w-4", liked && "fill-red-500")} />
                    {liked ? "Liked" : "Like"}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                  >
                    <Share2 className="mr-1 h-4 w-4" />
                    Share
                  </Button>
                  
                  {!isOrganizer(event.id) && (
                    <Button
                      onClick={handleAttend}
                      variant={attending ? "outline" : "default"}
                      className={attending ? "border-green-500 text-green-500" : ""}
                    >
                      {attending ? (
                        <>
                          <CheckCircle className="mr-1 h-4 w-4" />
                          Attending
                        </>
                      ) : (
                        "Attend Event"
                      )}
                    </Button>
                  )}
                  
                  {isOrganizer(event.id) && (
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Edit className="mr-1 h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="destructive">
                        <Trash2 className="mr-1 h-4 w-4" />
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              
              <Tabs defaultValue="about">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="discussions">Discussions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-6">
                  <div className="mt-6">
                    <h2 className="heading-3 mb-4">About This Event</h2>
                    <p className="text-muted-foreground whitespace-pre-line">{event.description}</p>
                  </div>
                  
                  {isOrganizer(event.id) && (
                    <div className="mt-8">
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Organizer View</AlertTitle>
                        <AlertDescription>
                          You're viewing this event as an organizer. You can edit event details, manage attendees, and see analytics.
                        </AlertDescription>
                      </Alert>
                    </div>
                  )}
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Organized by</h3>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=500" />
                        <AvatarFallback>OG</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Event Organizer</h4>
                        <p className="text-sm text-muted-foreground">Professional Event Planning</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="schedule" className="space-y-6">
                  <div className="mt-6">
                    <h2 className="heading-3 mb-4">Event Schedule</h2>
                    
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="mr-4 text-right min-w-[80px] text-muted-foreground">
                          9:00 AM
                        </div>
                        <div>
                          <div className="h-4 w-4 rounded-full bg-primary mt-1 relative">
                            <div className="absolute top-4 bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-14 bg-border"></div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium">Registration & Welcome</h4>
                          <p className="text-sm text-muted-foreground">Check-in and welcome refreshments</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="mr-4 text-right min-w-[80px] text-muted-foreground">
                          10:00 AM
                        </div>
                        <div>
                          <div className="h-4 w-4 rounded-full bg-primary mt-1 relative">
                            <div className="absolute top-4 bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-14 bg-border"></div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium">Opening Keynote</h4>
                          <p className="text-sm text-muted-foreground">Main presentation by featured speaker</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="mr-4 text-right min-w-[80px] text-muted-foreground">
                          12:00 PM
                        </div>
                        <div>
                          <div className="h-4 w-4 rounded-full bg-primary mt-1 relative">
                            <div className="absolute top-4 bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-14 bg-border"></div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium">Lunch Break</h4>
                          <p className="text-sm text-muted-foreground">Networking lunch with attendees</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="mr-4 text-right min-w-[80px] text-muted-foreground">
                          2:00 PM
                        </div>
                        <div>
                          <div className="h-4 w-4 rounded-full bg-primary mt-1 relative">
                            <div className="absolute top-4 bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-14 bg-border"></div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium">Breakout Sessions</h4>
                          <p className="text-sm text-muted-foreground">Choose from multiple parallel tracks</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="mr-4 text-right min-w-[80px] text-muted-foreground">
                          4:30 PM
                        </div>
                        <div>
                          <div className="h-4 w-4 rounded-full bg-primary mt-1"></div>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium">Closing Remarks & Networking</h4>
                          <p className="text-sm text-muted-foreground">Final discussion and social networking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="discussions" className="space-y-6">
                  <div className="mt-6">
                    <h2 className="heading-3 mb-4">Discussions</h2>
                    
                    {user ? (
                      <form onSubmit={handleCommentSubmit} className="mb-8">
                        <div className="flex gap-4">
                          <Avatar className="h-10 w-10 flex-shrink-0">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-grow">
                            <Textarea
                              placeholder="Add a comment..."
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                              className="resize-none mb-2"
                              rows={3}
                            />
                            <div className="flex justify-end">
                              <Button type="submit" disabled={!newComment.trim()}>
                                <MessageSquare className="mr-2 h-4 w-4" />
                                Comment
                              </Button>
                            </div>
                          </div>
                        </div>
                      </form>
                    ) : (
                      <div className="bg-muted p-4 rounded-lg mb-8 text-center">
                        <p className="mb-2">Sign in to join the discussion</p>
                        <Button onClick={() => navigate("/login")}>Sign In</Button>
                      </div>
                    )}
                    
                    <div className="space-y-6">
                      {comments.length > 0 ? (
                        comments.map((comment) => (
                          <div key={comment.id} className="flex gap-4">
                            <Avatar className="h-10 w-10 flex-shrink-0">
                              <AvatarImage src={comment.user.avatar} />
                              <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium">{comment.user.name}</h4>
                                <span className="text-xs text-muted-foreground">
                                  {new Date(comment.date).toLocaleDateString()}
                                </span>
                              </div>
                              <p className="mt-1 text-sm">{comment.content}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-2" />
                          <h3 className="text-lg font-medium mb-1">No comments yet</h3>
                          <p className="text-muted-foreground">Be the first to start the discussion!</p>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Event Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <div className="font-medium">Date & Time</div>
                      <div className="text-sm text-muted-foreground">{event.date}, {event.time}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-muted-foreground">{event.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <div className="font-medium">Attendees</div>
                      <div className="text-sm text-muted-foreground">{event.attendees} attending</div>
                    </div>
                  </div>
                  
                  {!isOrganizer(event.id) && (
                    <Button className="w-full mt-2" onClick={handleAttend}>
                      {attending ? "Cancel Registration" : "Register Now"}
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Similar Events</h3>
                
                <div className="space-y-4">
                  {eventsData
                    .filter(e => e.category === event.category && e.id !== event.id)
                    .slice(0, 3)
                    .map(similarEvent => (
                      <div 
                        key={similarEvent.id} 
                        className="flex cursor-pointer hover:bg-muted/50 p-2 rounded-md transition-colors"
                        onClick={() => navigate(`/events/${similarEvent.id}`)}
                      >
                        <div 
                          className="w-16 h-16 bg-cover bg-center rounded-md mr-3 flex-shrink-0"
                          style={{ backgroundImage: `url(${similarEvent.image})` }}
                        />
                        <div>
                          <h4 className="font-medium line-clamp-1">{similarEvent.title}</h4>
                          <p className="text-xs text-muted-foreground">{similarEvent.date}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
