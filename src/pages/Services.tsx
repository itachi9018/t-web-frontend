
import Layout from '@/components/Layout';
import { useState, useEffect, useRef } from 'react';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { 
  Code, PenTool, Smartphone, Globe, BarChart, Brain, 
  Server, LayoutGrid, Database, CheckCircle, RefreshCcw,
  ArrowRight, ZoomIn, Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'data', name: 'Data' },
    { id: 'cloud', name: 'Cloud & DevOps' }
  ];

  const services = [
    {
      icon: Code,
      title: 'Product Development',
      description: 'End-to-end development of scalable, robust and innovative digital products tailored to your business needs.',
      category: 'development'
    },
    {
      icon: LayoutGrid,
      title: 'Enterprise Software',
      description: 'Custom enterprise solutions designed to streamline operations, improve efficiency and drive business growth.',
      category: 'development'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Intuitive, high-performance mobile applications for iOS and Android platforms that engage users.',
      category: 'development'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive, fast-loading websites and web applications with exceptional user experience.',
      category: 'development'
    },
    {
      icon: Server,
      title: 'SaaS Solutions',
      description: 'Cloud-based Software-as-a-Service solutions that offer flexibility, scalability and accessibility.',
      category: 'cloud'
    },
    {
      icon: Brain,
      title: 'Machine Learning & AI',
      description: 'Intelligent systems that leverage data to provide insights, predictions and automation capabilities.',
      category: 'data'
    },
    {
      icon: RefreshCcw,
      title: 'DevOps Solutions',
      description: 'Streamlined development and operations processes to improve deployment frequency and reliability.',
      category: 'cloud'
    },
    {
      icon: PenTool,
      title: 'UX/UI Design',
      description: 'User-centered design that creates intuitive, engaging and visually appealing digital experiences.',
      category: 'design'
    },
    {
      icon: Database,
      title: 'Data Engineering & Analytics',
      description: 'End-to-end data solutions from collection and processing to visualization and insights.',
      category: 'data'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Comprehensive testing strategies to ensure your software is reliable, secure and performs optimally.',
      category: 'development'
    },
    {
      icon: BarChart,
      title: 'Migration & Modernization',
      description: 'Transform legacy systems into modern, cloud-native applications for improved performance and scalability.',
      category: 'cloud'
    },
    {
      icon: Clock,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help your organization make informed decisions and achieve business goals.',
      category: 'development'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

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
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in">
            <span className="text-gradient">Innovative Solutions</span> for Every Business Need
          </h1>
          <p className="text-muted-foreground text-lg mb-8 animate-slide-in" style={{ animationDelay: '100ms' }}>
            From custom software development to AI and data analytics, we offer comprehensive IT services to help your business thrive in the digital era.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section ref={sectionRef} className="py-16 px-4">
        <div className="container mx-auto">
          {/* Category Tabs */}
          <div className={cn(
            "flex flex-wrap justify-center mb-12",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "px-5 py-2 mx-2 my-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
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
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4 bg-bg-subtle">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Deliver <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-muted-foreground">
              Our proven methodology ensures consistent quality and successful outcomes for every project.
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: ZoomIn, title: 'Discovery', description: 'We understand your needs and define clear objectives.' },
                { icon: PenTool, title: 'Design', description: 'We create solutions tailored to your specific requirements.' },
                { icon: Code, title: 'Development', description: 'We build your solution using modern technologies.' },
                { icon: CheckCircle, title: 'Delivery', description: 'We deploy and provide ongoing support and maintenance.' }
              ].map((step, index) => (
                <div key={index} className="relative z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center text-primary mb-6">
                      <step.icon size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-center text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What industries do you serve?',
                answer: 'We work with clients across various industries including healthcare, finance, retail, education, manufacturing, and more. Our solutions are tailored to meet the specific needs of each industry.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take 6-12 months. We provide detailed timelines during the proposal phase.'
              },
              {
                question: 'Do you offer support after the project is completed?',
                answer: 'Yes, we offer comprehensive post-launch support and maintenance packages. Our team is available to provide ongoing technical support, implement updates, and ensure your solution continues to perform optimally.'
              },
              {
                question: 'What is your development methodology?',
                answer: 'We primarily use Agile methodology, which allows for flexibility, transparency, and collaboration throughout the development process. This approach enables us to adapt to changing requirements and deliver high-quality solutions efficiently.'
              },
              {
                question: 'How do you ensure the quality of your deliverables?',
                answer: 'Quality assurance is integrated into every phase of our process. We implement rigorous testing protocols, code reviews, and automated testing to ensure our solutions meet the highest standards of quality and performance.'
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-bg-subtle py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how our services can help you achieve your business goals and stay ahead of the competition.
                </p>
                <a href="/contact-us">
                  <Button size="lg" className="group">
                    Request a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                  alt="Business Transformation" 
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

export default Services;
