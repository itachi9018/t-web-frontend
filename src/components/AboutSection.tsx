
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { CheckCircle2, Users, Award, Coffee } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality in our deliverables.'
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our business dealings and relationships.'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaborative problem-solving.'
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
      className="py-20 px-4 bg-bg-subtle"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={cn(
              "inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}>
              About Us
            </div>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}>
              We're a Team of <span className="text-gradient">Tech Enthusiasts</span>
            </h2>
            <p className={cn(
              "text-muted-foreground mb-6",
              isVisible ? "animate-slide-in delay-100" : "opacity-0"
            )}>
              Tritva Tech was founded in 2024 with a simple mission: to help businesses leverage technology to achieve their goals. Our fresh perspective and innovative approach allow us to deliver cutting-edge solutions that meet the challenges of today's rapidly evolving digital landscape.
            </p>
            <p className={cn(
              "text-muted-foreground mb-8",
              isVisible ? "animate-slide-in delay-200" : "opacity-0"
            )}>
              Our team combines deep technical expertise with business acumen to deliver solutions that not only solve technical challenges but also drive business growth and innovation.
            </p>
            
            {/* <div className={cn(
              "grid grid-cols-2 gap-6 mb-8",
              isVisible ? "animate-fade-in delay-300" : "opacity-0"
            )}>
              {[
                { icon: Users, label: 'Expert Team', value: '50+' },
                { icon: Award, label: 'Industry Awards', value: '15+' },
                { icon: CheckCircle2, label: 'Projects Completed', value: '200+' },
                { icon: Coffee, label: 'Coffee Consumed', value: '∞' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={cn(
              isVisible ? "animate-fade-in delay-400" : "opacity-0"
            )}>
              <Button size="lg">Meet Our Team</Button>
            </div> */}
          </div>
          
          <div className={cn(
            "relative",
            isVisible ? "animate-fade-in delay-500" : "opacity-0"
          )}>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Our Team" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="absolute -top-6 -right-6 glass-card p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Our Core Values</h3>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{value.title}</div>
                      <div className="text-sm text-muted-foreground">{value.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-12 -left-12 h-64 w-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
