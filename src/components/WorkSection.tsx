
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import WorkCard from './WorkCard';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const WorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      category: 'Web Development',
      description: 'Completely redesigned the UI/UX of a major e-commerce platform, resulting in a 40% increase in conversions.',
      imgSrc: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Financial Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Created an intuitive analytics dashboard for financial data, enabling real-time decision making for executives.',
      imgSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Healthcare Mobile Application',
      category: 'Mobile Development',
      description: 'Developed a secure healthcare app that connects patients with doctors and manages medical records.',
      imgSrc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
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
      className="py-20 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={cn(
            "inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            Our Work
          </div>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 font-elegant",
            isVisible ? "animate-slide-in" : "opacity-0"
          )}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className={cn(
            "text-muted-foreground",
            isVisible ? "animate-slide-in delay-100" : "opacity-0"
          )}>
            Explore some of our recent projects that showcase our expertise and commitment to delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                isVisible ? "animate-scale-in" : "opacity-0"
              )}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <WorkCard 
                title={project.title}
                category={project.category}
                description={project.description}
                imgSrc={project.imgSrc}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/work">
            <Button 
              size="lg"
              className={cn(
                "group",
                isVisible ? "animate-fade-in delay-700" : "opacity-0"
              )}
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
