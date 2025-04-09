import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import logo from '../assets/Transparentlogo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Approach', path: '/approach' },
    { name: 'About', path: '/about' },
    // { name: 'Contact Us', path: '/contact-us' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-background/90 backdrop-blur-lg shadow-md border-b border-border/30" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between lg:justify-center relative">
        <NavLink 
          to="/" 
          className="text-2xl font-bold text-foreground flex items-center gap-2 lg:absolute lg:left-4"
        >
          <div className="w-8 h-8 rounded-md flex items-center justify-center">
            {/* <span className="text-primary-foreground font-bold text-lg">T</span> */}
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="uppercase font-sans tracking-wider text-white/80 backdrop-blur-sm px-2 py-0.5 rounded-sm">TRITVA TECH</span>
        </NavLink>
        
        <nav className="hidden md:flex items-center space-x-1 md:mt-0">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {item.name}
            </NavLink>
          ))}
          <a href="/contact-us">
            <Button size="sm" className="ml-2">
              Contact Us
            </Button>
          </a>
          {/* <Button size="sm" className="ml-2">Contact Us</Button> */}
        </nav>
        
        <button
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 pt-20 pb-6 px-6 md:hidden flex flex-col",
          "transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {item.name}
            </NavLink>
          ))}
          <Button size="lg" className="mt-4 w-full">Contact Us</Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
