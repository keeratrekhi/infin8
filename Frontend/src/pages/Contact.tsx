
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Eventify";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Have questions or need assistance? We're here to help! Reach out to our team using any of the methods below.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card rounded-xl p-6 text-center shadow-sm">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-medium text-xl mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-2">For general inquiries</p>
                <a href="mailto:info@eventify.example" className="text-primary hover:underline">
                  info@eventify.example
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-6 text-center shadow-sm">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-medium text-xl mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-2">Mon-Fri, 9am-5pm</p>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-6 text-center shadow-sm">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-medium text-xl mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-2">Our headquarters</p>
                <address className="not-italic text-primary">
                  123 Event Street<br />
                  San Francisco, CA 94103
                </address>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-display font-semibold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your question or concern in detail..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-3xl font-display font-semibold mb-6">FAQ</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      [Frequently asked question 1]
                    </h3>
                    <p className="text-muted-foreground">
                      [Answer to the question]
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      [Frequently asked question 2]
                    </h3>
                    <p className="text-muted-foreground">
                      [Answer to the question]
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      [Frequently asked question 3]
                    </h3>
                    <p className="text-muted-foreground">
                      [Answer to the question]
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      [Frequently asked question 4]
                    </h3>
                    <p className="text-muted-foreground">
                      [Answer to the question]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
