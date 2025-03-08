
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CreateEventButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button 
        className="h-14 w-14 rounded-full shadow-lg" 
        size="icon"
        onClick={() => navigate("/create-event")}
      >
        <Plus className="h-6 w-6" />
        <span className="sr-only">Create Event</span>
      </Button>
    </div>
  );
};

export default CreateEventButton;
