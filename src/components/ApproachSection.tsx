
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Lightbulb, Search, Palette, Code, 
  Terminal, Shield, CheckCircle2, BarChart 
} from 'lucide-react';

const ApproachSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery',
      description: 'We thoroughly understand your business needs, objectives, and challenges to develop a tailored solution strategy.'
    },
    {
      icon: Search,
      title: 'Research & Analysis',
      description: 'Conducting in-depth market research and analysis to identify opportunities and competitive advantages.'
    },
    {
      icon: Palette,
      title: 'Design & Prototype',
      description: 'Creating intuitive designs and interactive prototypes focused on optimal user experience.'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Building robust, scalable solutions using cutting-edge technologies and best practices.'
    },
    {
      icon: Terminal,
      title: 'Testing & QA',
      description: 'Rigorous testing to ensure quality, performance, and security of the delivered solution.'
    },
    {
      icon: Shield,
      title: 'Deployment',
      description: 'Smooth deployment with minimal disruption to your existing systems and business operations.'
    },
    {
      icon: CheckCircle2,
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to ensure your solution continues to operate optimally.'
    },
    {
      icon: BarChart,
      title: 'Continuous Improvement',
      description: 'Data-driven improvements and updates to keep your solution at the cutting edge.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-bg-subtle to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-bg-subtle to-transparent opacity-70"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={cn(
            "inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            Our Approach
          </div>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6",
            isVisible ? "animate-slide-in" : "opacity-0"
          )}>
            <span className="text-gradient">Methodical Process</span> for Exceptional Results
          </h2>
          <p className={cn(
            "text-muted-foreground",
            isVisible ? "animate-slide-in delay-100" : "opacity-0"
          )}>
            Our structured approach ensures we deliver high-quality solutions that align with your business goals and exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card hover-card p-6",
                isVisible ? "animate-scale-in" : "opacity-0"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <step.icon size={24} />
                </div>
                <div className="relative mb-4">
                  <div className="text-2xl font-bold text-primary">{index + 1}</div>
                  {/* <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/20"></div> */}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-card p-8 max-w-4xl mx-auto">
          <div className={cn(
            "flex flex-col md:flex-row items-center",
            isVisible ? "animate-fade-in delay-500" : "opacity-0"
          )}>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-muted-foreground">
                Let's discuss how our methodical approach can help solve your business challenges and drive growth.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="/contact-us">
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Schedule a Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
