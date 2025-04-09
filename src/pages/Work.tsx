import Layout from '@/components/Layout';
import { useState, useEffect, useRef } from 'react';
import WorkCard from '@/components/WorkCard';
import Button from '@/components/Button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'enterprise', name: 'Enterprise Software' },
    { id: 'data', name: 'Data & AI' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      category: 'Web Development',
      tag: 'web',
      description: 'Completely redesigned the UI/UX of a major e-commerce platform, resulting in a 40% increase in conversions.',
      imgSrc: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Financial Analytics Dashboard',
      category: 'Data Visualization',
      tag: 'data',
      description: 'Created an intuitive analytics dashboard for financial data, enabling real-time decision making for executives.',
      imgSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Healthcare Mobile Application',
      category: 'Mobile Development',
      tag: 'mobile',
      description: 'Developed a secure healthcare app that connects patients with doctors and manages medical records.',
      imgSrc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Supply Chain Management System',
      category: 'Enterprise Software',
      tag: 'enterprise',
      description: 'Built a comprehensive supply chain management system that improved inventory accuracy by 35%.',
      imgSrc: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'AI-Powered Customer Service Bot',
      category: 'Machine Learning',
      tag: 'data',
      description: 'Developed an intelligent chatbot that handles customer inquiries with 85% accuracy, reducing support costs.',
      imgSrc: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
    },
    {
      title: 'Real Estate Marketplace',
      category: 'Web Development',
      tag: 'web',
      description: 'Created a feature-rich real estate platform with advanced search capabilities and virtual tours.',
      imgSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
    },
    {
      title: 'Fitness Tracking Mobile App',
      category: 'Mobile Development',
      tag: 'mobile',
      description: 'Designed and developed a comprehensive fitness tracking app with social features and personalized workout plans.',
      imgSrc: 'https://images.unsplash.com/photo-1540324155974-7523202daa3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Manufacturing Resource Planning',
      category: 'Enterprise Software',
      tag: 'enterprise',
      description: 'Implemented an MRP system that streamlined production processes and reduced waste by 25%.',
      imgSrc: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80'
    },
    {
      title: 'Predictive Maintenance System',
      category: 'Data Engineering',
      tag: 'data',
      description: 'Built a predictive maintenance solution that uses IoT data to forecast equipment failures before they occur.',
      imgSrc: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tag === activeFilter);

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
            Our Work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in">
            Innovative <span className="text-gradient">Projects</span> That Drive Results
          </h1>
          <p className="text-muted-foreground text-lg mb-8 animate-slide-in" style={{ animationDelay: '100ms' }}>
            Explore our portfolio of successful projects that showcase our expertise in delivering high-impact digital solutions across industries.
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section ref={sectionRef} className="py-16 px-4">
        <div className="container mx-auto">
          {/* Filter Tabs */}
          <div className={cn(
            "flex flex-wrap justify-center mb-12",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={cn(
                  "px-5 py-2 mx-2 my-2 rounded-full text-sm font-medium transition-all",
                  activeFilter === filter.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                )}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className={cn(
                  isVisible ? "animate-scale-in" : "opacity-0"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
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
        </div>
      </section>

      {/* Featured Case Study */}
      {/* <section className="py-20 px-4 bg-bg-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Featured Case Study
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Success Story</span>: HealthTech Revolution
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Learn how we transformed a traditional healthcare provider into a digital-first organization, improving patient care and operational efficiency.
            </p>
          </div>

          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                  <p className="text-muted-foreground mb-4">
                    A leading healthcare provider was struggling with outdated systems, manual processes, and limited patient engagement tools. They needed a comprehensive digital transformation to improve care quality and operational efficiency.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Legacy systems causing operational inefficiencies',
                      'Limited digital patient engagement capabilities',
                      'Data silos preventing holistic patient insights',
                      'Rising operational costs and resource constraints'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                  <p className="text-muted-foreground mb-4">
                    We developed an integrated healthcare platform consisting of:
                  </p>
                  <ul className="space-y-4 mb-6">
                    {[
                      {
                        title: 'Patient Portal & Mobile App',
                        description: 'Secure access to records, appointments, and telemedicine'
                      },
                      {
                        title: 'Clinical Management System',
                        description: 'Streamlined workflows for healthcare providers'
                      },
                      {
                        title: 'Analytics Dashboard',
                        description: 'Real-time insights and predictive analytics'
                      }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1">
                          <span className="text-lg font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="group">
                    Read Full Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <div className="glass-card p-4 rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Healthcare App" 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                
                <div className="mt-8 glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Results & Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { metric: '40%', description: 'Increase in patient satisfaction' },
                      { metric: '35%', description: 'Reduction in administrative costs' },
                      { metric: '60%', description: 'Faster appointment scheduling' },
                      { metric: '25%', description: 'Improvement in care coordination' }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">{item.metric}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Client Testimonials */}
      {/* <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Hear from organizations that have experienced the impact of our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Tritva Tech transformed our business with their innovative solutions. Their team's expertise and dedication exceeded our expectations at every stage of the project.",
                author: "Sarah Johnson",
                position: "CTO, Global Retail Inc.",
                avatar: "https://randomuser.me/api/portraits/women/12.jpg"
              },
              {
                quote: "Working with Tritva Tech has been a game-changer for our company. Their strategic approach and technical excellence delivered outstanding results that continue to drive our business forward.",
                author: "Michael Chen",
                position: "CEO, FinTech Solutions",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "The team at Tritva Tech truly understands how to solve complex business challenges with technology. They delivered a solution that not only met our current needs but is also scalable for our future growth.",
                author: "Emma Rodriguez",
                position: "COO, Healthcare Innovations",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg"
              },
              {
                quote: "From initial consultation to final delivery, Tritva Tech demonstrated exceptional professionalism and technical expertise. They're not just vendors; they're true partners in our success.",
                author: "David Park",
                position: "VP of Engineering, TechStart",
                avatar: "https://randomuser.me/api/portraits/men/46.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-6 md:p-8 flex flex-col h-full">
                <div className="mb-4 text-primary">
                  {Array(5).fill(0).map((_, starIndex) => (
                    <span key={starIndex} className="text-lg">★</span>
                  ))}
                </div>
                <blockquote className="flex-grow">
                  <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="bg-bg-subtle py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Success Story</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your organization achieve its business goals with innovative technology solutions.
            </p>
            <a href="/contact-us">
              <Button size="lg" className="group">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
