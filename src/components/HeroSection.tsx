
import { useEffect, useRef } from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div>
            <div 
              ref={titleRef} 
              className="opacity-0 transform translate-y-4 delay-[100ms]"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 font-elegant">
                <span className="block">Pioneering</span> 
                <span className="text-gradient">Digital Transformation</span>
                <span className="block">For Your Business</span>
              </h1>
            </div>
            
            <div 
              ref={subtitleRef} 
              className="opacity-0 transform translate-y-4 delay-[300ms]"
            >
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Tritva Tech delivers cutting-edge software solutions that empower businesses to thrive in the digital era. We transform ideas into exceptional digital experiences.
              </p>
            </div>
            
            <div 
              ref={ctaRef} 
              className="flex flex-col sm:flex-row gap-4 opacity-0 transform translate-y-4 delay-[500ms]"
            >
              <a href="/contact-us">
                <Button size="lg" className="group">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="/services">
                <Button variant="outline" size="lg">
                  Our Services
                </Button>
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              {['10+', '200+', '15+'].map((stat, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "text-center opacity-0 transform translate-y-4",
                    `delay-[${700 + i * 100}ms]`
                  )}
                  style={{ animationDelay: `${700 + i * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-foreground mb-1">{stat}</div>
                  <div className="text-sm text-muted-foreground">
                    {i === 0 ? 'Years Experience' : i === 1 ? 'Projects Completed' : 'Awards Won'}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="opacity-0 transform translate-y-4 delay-[700ms]"
          >
            <div className="relative">
              <div className="glass-card p-2 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Digital Transformation" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Floating elements */}
              {/* <div className="absolute -top-5 -right-5 glass-card px-4 py-3 animate-float shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-sm font-medium">Projects Active</span>
                </div>
                <div className="text-2xl font-bold">42</div>
              </div> */}
              
              <div className="absolute -bottom-5 -left-5 glass-card px-4 py-3 animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-sm font-medium">Client Satisfaction</span>
                </div>
                <div className="text-2xl font-bold">98%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
