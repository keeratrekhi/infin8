
import { CalendarDays } from "lucide-react";
import infin from "../img/Infin8-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
            <span className='pl-7'> <img style={{ width: "100%", height: "60px", objectFit: "cover" }}  src={infin} alt="infin logo" /></span>
              {/* <CalendarDays className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-display font-semibold">Eventify</span> */}
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Create, manage, and discover events effortlessly with our intuitive platform.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-medium text-base mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-medium text-base mb-4">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Technology</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Music</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Food & Drinks</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Business</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Wellness</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-medium text-base mb-4">Subscribe</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Stay updated with the latest events and features.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-l-md border border-border flex-1 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Eventify. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
