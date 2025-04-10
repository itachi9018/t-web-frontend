import { useState, useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import Button from './Button';

import { 
  Code, PenTool, Smartphone, Globe, BarChart, Brain, 
  Server, LayoutGrid, Database, CheckCircle, RefreshCcw,
  X, ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const serviceItems = [
    {
      icon: Code,
      title: 'Product Development',
      description: 'End-to-end development of scalable, robust and innovative digital products tailored to your business needs.',
      approach: [
        {
          title: "Discovery & Ideation",
          description: "We begin by understanding your vision and market needs. Together, we define clear goals and key features for your product."
        },
        {
          title: "Design & Prototyping",
          description: "Our design team creates wireframes and prototypes, enabling you to visualize your product before development starts."
        },
        {
          title: "Development",
          description: "Our development team builds the product iteratively, using the latest technologies to ensure scalability and functionality."
        },
        {
          title: "Testing",
          description: "We conduct comprehensive testing to identify bugs and ensure the product meets all requirements."
        },
        {
          title: "Launch & Post-Launch",
          description: "After a successful launch, we offer ongoing support and improvements based on user feedback."
        }
      ]
    },
    {
      icon: LayoutGrid,
      title: 'Enterprise Software',
      description: 'Custom enterprise solutions designed to streamline operations, improve efficiency and drive business growth.',
      approach: [
        {
          title: "Requirements Gathering",
          description: "We collaborate with your team to gather detailed business and technical requirements for the software."
        },
        {
          title: "Solution Design",
          description: "Our experts design a high-level architecture, ensuring it integrates seamlessly with your existing systems."
        },
        {
          title: "Development & Integration",
          description: "We develop the software, focusing on user needs, while integrating it with your enterprise systems (CRM, ERP, etc.)."
        },
        {
          title: "Testing & QA",
          description: "Rigorous testing ensures that all functionalities work flawlessly and meet business standards."
        },
        {
          title: "Deployment & Support",
          description: "We assist with deployment and provide continuous support to ensure the software evolves with your business."
        }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Intuitive, high-performance mobile applications for iOS and Android platforms that engage users.',
      approach: [
        {
          title: "Consultation & Planning",
          description: "We work with you to define the app's core features, target audience, and user experience goals."
        },
        {
          title: "UI/UX Design",
          description: "Our design team crafts user-friendly interfaces that are both visually appealing and functional."
        },
        {
          title: "Development",
          description: "Using native or cross-platform frameworks, we build high-performance apps that work seamlessly across devices."
        },
        {
          title: "Testing & Debugging",
          description: "We thoroughly test the app to ensure it works flawlessly on multiple devices and OS versions."
        },
        {
          title: "Launch & Maintenance",
          description: "After launch, we offer support, monitoring, and updates to keep your app relevant and efficient."
        }
      ]
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive, fast-loading websites and web applications with exceptional user experience.',
      approach: [
        {
          title: "Discovery & Requirement Analysis",
          description: "We start by understanding your business goals and website requirements, defining functionality and design needs."
        },
        {
          title: "Design & Prototyping",
          description: "Our design team creates wireframes and interactive prototypes, ensuring alignment with your vision before development begins."
        },
        {
          title: "Frontend & Backend Development",
          description: "We develop both the frontend and backend, ensuring your site is responsive, fast, and scalable."
        },
        {
          title: "Testing & Optimization",
          description: "Rigorous testing ensures cross-browser compatibility, mobile responsiveness, and high performance."
        },
        {
          title: "Deployment & Maintenance",
          description: "After launch, we provide ongoing support and updates to keep your site secure and up to date."
        }
      ]
    },
    // {
    //   icon: Server,
    //   title: 'SaaS Solutions',
    //   description: 'Cloud-based Software-as-a-Service solutions that offer flexibility, scalability and accessibility.',
    //   approach: [
    //     {
    //       title: "Consultation & Planning",
    //       description: "We start by understanding your product's goals and defining core features and functionalities."
    //     },
    //     {
    //       title: "Architecture Design",
    //       description: "Our team designs a robust, cloud-native architecture that supports multi-tenancy and scalability."
    //     },
    //     {
    //       title: "Development & Testing",
    //       description: "We develop your application using modern frameworks and cloud platforms, with rigorous testing for functionality and security."
    //     },
    //     {
    //       title: "Deployment",
    //       description: "We deploy your SaaS application on secure cloud infrastructure, ensuring reliability and performance."
    //     },
    //     {
    //       title: "Ongoing Support",
    //       description: "After launch, we provide maintenance, updates, and new features to continuously improve your SaaS product."
    //     }
    //   ]
    // },
    {
      icon: Brain,
      title: 'Machine Learning & AI',
      description: 'Intelligent systems that leverage data to provide insights, predictions and automation capabilities.',
      approach: [
        {
          title: "Problem Understanding & Data Collection",
          description: "We collaborate with you to define the problem and gather the necessary data for training machine learning models."
        },
        {
          title: "Model Development",
          description: "Our data scientists develop custom machine learning models suited to your needs, focusing on accuracy and performance."
        },
        {
          title: "Model Training & Testing",
          description: "We train the model using clean, processed data and validate it with rigorous testing to ensure it performs as expected."
        },
        {
          title: "Deployment",
          description: "After validation, we deploy the AI model into your systems, enabling real-time insights or automation."
        },
        {
          title: "Continuous Monitoring & Improvement",
          description: "We monitor the model's performance and provide regular updates to ensure it evolves with your data."
        }
      ]
    },
    {
      icon: RefreshCcw,
      title: 'DevOps Solutions',
      description: 'Streamlined development and operations processes to improve deployment frequency and reliability.',
      approach: [
        {
          title: "Infrastructure Assessment",
          description: "We assess your current development and deployment processes to identify areas for improvement."
        },
        {
          title: "CI/CD Pipeline Setup",
          description: "We implement automated Continuous Integration and Continuous Deployment (CI/CD) pipelines, ensuring smooth code releases."
        },
        {
          title: "Infrastructure Automation",
          description: "Using tools like Terraform and Docker, we automate infrastructure management and application deployment."
        },
        {
          title: "Monitoring & Logging",
          description: "We set up monitoring and logging systems to track application health and performance in real time."
        },
        {
          title: "Ongoing Optimization",
          description: "We continuously optimize and scale your infrastructure, ensuring high availability and performance."
        }
      ]
    },
    // {
    //   icon: PenTool,
    //   title: 'UX/UI Design',
    //   description: 'User-centered design that creates intuitive, engaging and visually appealing digital experiences.',
    //   approach: [
    //     {
    //       title: "User Research & Discovery",
    //       description: "We start by understanding your target users' needs, pain points, and behaviors through research."
    //     },
    //     {
    //       title: "Wireframing & Prototyping",
    //       description: "We create wireframes and interactive prototypes that align with your product vision and user goals."
    //     },
    //     {
    //       title: "UI Design",
    //       description: "Our designers craft beautiful, on-brand interfaces that provide a seamless user experience across devices."
    //     },
    //     {
    //       title: "Usability Testing",
    //       description: "We conduct usability testing to ensure the design is intuitive and effective, iterating based on feedback."
    //     },
    //     {
    //       title: "Handoff & Support",
    //       description: "We provide the design files and collaborate with developers to ensure the implementation matches the vision."
    //     }
    //   ]
    // },
    // {
    //   icon: Database,
    //   title: 'Data Engineering & Analytics',
    //   description: 'End-to-end data solutions from collection and processing to visualization and insights.',
    //   approach: [
    //     {
    //       title: "Data Collection & Integration",
    //       description: "We integrate data from multiple sources into a centralized platform, ensuring consistency and quality."
    //     },
    //     {
    //       title: "ETL Pipeline Development",
    //       description: "We build robust ETL pipelines to process and transform your data for analysis."
    //     },
    //     {
    //       title: "Data Modeling & Warehousing",
    //       description: "We design efficient data models and implement data warehouses to ensure fast and accurate queries."
    //     },
    //     {
    //       title: "Analytics & Reporting",
    //       description: "We create customized dashboards and reports that provide real-time insights for better decision-making."
    //     },
    //     {
    //       title: "Ongoing Monitoring",
    //       description: "We continuously monitor the data pipelines and ensure the analytics platform is performing optimally."
    //     }
    //   ]
    // },
    // {
    //   icon: CheckCircle,
    //   title: 'Quality Assurance',
    //   description: 'Comprehensive testing strategies to ensure your software is reliable, secure and performs optimally.',
    //   approach: [
    //     {
    //       title: "Test Planning",
    //       description: "We start by understanding the product requirements and developing a detailed test plan covering all test scenarios."
    //     },
    //     {
    //       title: "Test Case Development",
    //       description: "We write test cases and set up the test environment to ensure thorough coverage across all aspects of the software."
    //     },
    //     {
    //       title: "Test Execution",
    //       description: "Our QA team performs manual and automated tests, identifying bugs and verifying features."
    //     },
    //     {
    //       title: "Defect Tracking & Reporting",
    //       description: "We track and report defects, ensuring they are resolved before the software reaches users."
    //     },
    //     {
    //       title: "Post-Launch Support",
    //       description: "We continue to test the product post-launch, providing updates and ongoing QA support as needed."
    //     }
    //   ]
    // },
    // {
    //   icon: BarChart,
    //   title: 'Migration & Modernization',
    //   description: 'Transform legacy systems into modern, cloud-native applications for improved performance and scalability.',
    //   approach: [
    //     {
    //       title: "Assessment & Planning",
    //       description: "We assess your current systems and develop a comprehensive migration plan that ensures minimal disruption."
    //     },
    //     {
    //       title: "Architecture Design & Solution Development",
    //       description: "We design a new, modern architecture that supports scalability and performance, choosing the right technologies."
    //     },
    //     {
    //       title: "Data Migration & Testing",
    //       description: "We migrate your data securely, ensuring integrity and accuracy, and conduct thorough testing to validate the new system."
    //     },
    //     {
    //       title: "Deployment & Go-Live",
    //       description: "We deploy the new system, monitoring its performance to ensure a smooth go-live process."
    //     },
    //     {
    //       title: "Ongoing Support & Optimization",
    //       description: "Post-migration, we provide continuous support, ensuring the system remains optimized and evolves with your business."
    //     }
    //   ]
    // }
  ];

  const handleServiceClick = (index: number) => {
    setSelectedService(index);
    setIsSheetOpen(true);
  };

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
      className="bg-white/30 backdrop-blur-sm py-20 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={cn(
            "inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            Our Services
          </div>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 font-elegant",
            isVisible ? "animate-slide-in" : "opacity-0"
          )}>
            Comprehensive IT Solutions <span className="text-gradient">for Your Business</span>
          </h2>
          <p className={cn(
            "text-muted-foreground",
            isVisible ? "animate-slide-in delay-100" : "opacity-0"
          )}>
            We offer a wide range of IT services to help your business thrive in the digital landscape.
            Our expertise spans across various technologies and domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className={cn(
                isVisible ? "animate-scale-in" : "opacity-0"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                onClick={() => handleServiceClick(index)}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/#/services">
            <Button 
              size="lg"
              className={cn(
                isVisible ? "animate-fade-in delay-700" : "opacity-0"
              )}
            >
              View All Services
            </Button>
          </a>
        </div>
      </div>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto">
          {selectedService !== null && (
            <>
              <SheetHeader className="pb-6">
                <SheetTitle className="text-2xl font-bold">
                  {serviceItems[selectedService].title}
                </SheetTitle>
                <SheetDescription>
                  {serviceItems[selectedService].description}
                </SheetDescription>
              </SheetHeader>
              
              <div className="mt-6 space-y-6">
                <h3 className="text-lg font-semibold">Our Approach</h3>
                <div className="space-y-4">
                  {serviceItems[selectedService].approach.map((step, index) => (
                    <div key={index} className="glass-card p-4 transition-all hover:shadow-md">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                          <span className="text-sm font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      <Dialog open={false} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-2">
              {selectedService !== null && serviceItems[selectedService].title}
            </DialogTitle>
            <DialogDescription>
              {selectedService !== null && serviceItems[selectedService].description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-6">
            <h3 className="text-lg font-semibold">Our Approach</h3>
            <div className="space-y-4">
              {selectedService !== null && serviceItems[selectedService].approach.map((step, index) => (
                <div key={index} className="glass-card p-4 transition-all hover:shadow-md">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
