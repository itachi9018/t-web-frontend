
import { NavLink } from 'react-router-dom';
import { 
  Github, Twitter, Linkedin, 
  Mail, Phone, MapPin 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              {/* <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div> */}
              <span className="uppercase font-sans tracking-wider text-white/80 backdrop-blur-sm px-2 py-0.5 rounded-sm">TRITVA TECH</span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              Empowering businesses with innovative technology solutions for tomorrow's challenges.
            </p>
            {/* <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#/work" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="/#/approach" className="text-muted-foreground hover:text-primary transition-colors">
                  Approach
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Product Development
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Enterprise Software
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Machine Learning & AI
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  UX/UI Design
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              {/* <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Tech Avenue, Suite 400<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-muted-foreground" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </li> */}
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-muted-foreground" />
                <a href="mailto:tritvatech@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  tritvatech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-muted-foreground">
            © {currentYear} Tritva Tech. All rights reserved.
          </div>
          {/* <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
