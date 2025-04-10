import Layout from '@/components/Layout';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import { 
  Lightbulb, Search, Palette, Code, 
  Terminal, Shield, CheckCircle2, BarChart,
  ArrowRight, ZoomIn, LucideIcon
} from 'lucide-react';

interface ApproachStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

const ApproachStep = ({ number, title, description, icon: Icon, isActive, onClick }: ApproachStepProps) => (
  <div 
    className={cn(
      "relative p-6 rounded-lg transition-all duration-300 cursor-pointer",
      isActive ? "bg-primary/5 border-2 border-primary shadow-sm" : "border border-border hover:bg-secondary"
    )}
    onClick={onClick}
  >
    <div className="flex items-start">
      <div className="mr-4">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold",
          isActive ? "bg-primary text-white" : "bg-secondary text-muted-foreground"
        )}>
          {number}
        </div>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <Icon className={cn(
            "w-5 h-5 mr-2",
            isActive ? "text-primary" : "text-muted-foreground"
          )} />
          <h3 className={cn(
            "text-lg font-semibold",
            isActive ? "text-primary" : "text-foreground"
          )}>
            {title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const Approach = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery',
      description: 'We begin by understanding your business goals, challenges, and requirements through in-depth discussions and research.'
    },
    {
      icon: Search,
      title: 'Research & Analysis',
      description: 'Our team conducts thorough market research, competitor analysis, and identifies opportunities for innovation.'
    },
    {
      icon: ZoomIn,
      title: 'Strategy Development',
      description: 'Based on gathered insights, we develop a comprehensive strategy tailored to your specific needs and objectives.'
    },
    {
      icon: Palette,
      title: 'Design & Prototype',
      description: 'Our designers create intuitive interfaces and interactive prototypes focused on delivering optimal user experiences.'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Our engineers build robust, scalable solutions using cutting-edge technologies and industry best practices.'
    },
    {
      icon: Terminal,
      title: 'Testing & QA',
      description: 'Rigorous testing ensures quality, performance, security, and compatibility across all platforms and devices.'
    },
    {
      icon: Shield,
      title: 'Deployment',
      description: 'We implement your solution with minimal disruption, ensuring smooth integration with existing systems.'
    },
    {
      icon: CheckCircle2,
      title: 'Support & Maintenance',
      description: 'Our team provides ongoing support and maintenance to ensure your solution continues to operate optimally.'
    },
    {
      icon: BarChart,
      title: 'Continuous Improvement',
      description: 'We continuously monitor performance and implement data-driven improvements to keep your solution at the cutting edge.'
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
    <Layout>
      {/* Hero Section */}
      <section className="bg-bg-subtle pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            Our Approach
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in">
            How We <span className="text-gradient">Deliver Excellence</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 animate-slide-in" style={{ animationDelay: '100ms' }}>
            Our structured methodology ensures we consistently deliver high-quality solutions that exceed expectations and drive meaningful business outcomes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Steps List */}
            <div className="space-y-4">
              <h2 className={cn(
                "text-2xl md:text-3xl font-bold mb-6",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}>
                Our Proven Process
              </h2>
              <div className={cn(
                "space-y-4",
                isVisible ? "animate-slide-in" : "opacity-0"
              )}>
                {steps.map((step, index) => (
                  <ApproachStep
                    key={index}
                    number={index + 1}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    isActive={activeStep === index}
                    onClick={() => setActiveStep(index)}
                  />
                ))}
              </div>
            </div>

            {/* Step Details */}
            <div className={cn(
              "glass-card p-8 sticky top-24",
              isVisible ? "animate-scale-in" : "opacity-0"
            )}>
              <div className="text-sm font-medium text-primary mb-2">Step {activeStep + 1}</div>
              <h3 className="text-2xl font-bold mb-4">{steps[activeStep].title}</h3>
              
              <div className="aspect-video bg-background rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon size={80} strokeWidth={1} />;
                  })()}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{steps[activeStep].description}</p>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Key Activities:</h4>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span>
                        {activeStep === 0 && item === 1 && "Conduct discovery workshops and stakeholder interviews"}
                        {activeStep === 0 && item === 2 && "Document business requirements and objectives"}
                        {activeStep === 0 && item === 3 && "Define project scope and success criteria"}
                        
                        {activeStep === 1 && item === 1 && "Analyze market trends and competitor strategies"}
                        {activeStep === 1 && item === 2 && "Identify target audience needs and pain points"}
                        {activeStep === 1 && item === 3 && "Evaluate technological feasibility and constraints"}
                        
                        {activeStep === 2 && item === 1 && "Develop strategic roadmap and implementation plan"}
                        {activeStep === 2 && item === 2 && "Define key performance indicators (KPIs)"}
                        {activeStep === 2 && item === 3 && "Create resource allocation and timeline estimates"}
                        
                        {activeStep === 3 && item === 1 && "Create wireframes and mockups for user interfaces"}
                        {activeStep === 3 && item === 2 && "Develop interactive prototypes for user testing"}
                        {activeStep === 3 && item === 3 && "Refine designs based on stakeholder feedback"}
                        
                        {activeStep === 4 && item === 1 && "Set up development environment and infrastructure"}
                        {activeStep === 4 && item === 2 && "Implement solution using agile methodology"}
                        {activeStep === 4 && item === 3 && "Conduct regular code reviews and documentation"}
                        
                        {activeStep === 5 && item === 1 && "Perform functional, performance, and security testing"}
                        {activeStep === 5 && item === 2 && "Conduct user acceptance testing (UAT)"}
                        {activeStep === 5 && item === 3 && "Address and resolve identified issues"}
                        
                        {activeStep === 6 && item === 1 && "Create deployment strategy and rollback plans"}
                        {activeStep === 6 && item === 2 && "Execute deployment with minimal disruption"}
                        {activeStep === 6 && item === 3 && "Provide training and knowledge transfer"}
                        
                        {activeStep === 7 && item === 1 && "Offer 24/7 technical support and troubleshooting"}
                        {activeStep === 7 && item === 2 && "Implement regular maintenance and updates"}
                        {activeStep === 7 && item === 3 && "Monitor system performance and stability"}
                        
                        {activeStep === 8 && item === 1 && "Collect and analyze user feedback and usage data"}
                        {activeStep === 8 && item === 2 && "Identify opportunities for feature enhancements"}
                        {activeStep === 8 && item === 3 && "Implement iterative improvements and optimizations"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => setActiveStep(prev => (prev === 0 ? steps.length - 1 : prev - 1))}
                  disabled={steps.length <= 1}
                >
                  Previous Step
                </Button>
                <Button 
                  onClick={() => setActiveStep(prev => (prev === steps.length - 1 ? 0 : prev + 1))}
                  disabled={steps.length <= 1}
                  className="group"
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-bg-subtle py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how our proven approach can help solve your business challenges and drive innovation.
                </p>
                <a href="/#/contact-us">
                  <Button size="lg" className="group">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Team Collaboration" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Approach;
