
import Layout from '@/components/Layout';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import { 
  CheckCircle2, Users, Award, Coffee, 
  ArrowRight, Briefcase, GraduationCap, Globe
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: 'Alexander Chen',
      position: 'CEO & Founder',
      bio: 'With over 20 years of experience in technology leadership, Alex founded Tritva Tech with a vision to help businesses leverage technology for growth.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sophia Rodriguez',
      position: 'CTO',
      bio: 'Sophia leads our engineering team, bringing 15+ years of experience in software architecture and development across multiple industries.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Michael Johnson',
      position: 'Director of Product',
      bio: 'Michael oversees product strategy and development, ensuring our solutions align with market needs and deliver exceptional value.',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      name: 'Emily Park',
      position: 'UX/UI Design Lead',
      bio: 'Emily leads our design team, creating intuitive and engaging user experiences that balance aesthetics with functionality.',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      name: 'David Wilson',
      position: 'Lead Solutions Architect',
      bio: 'David designs scalable, robust technical solutions for our enterprise clients, specializing in complex system integration.',
      avatar: 'https://randomuser.me/api/portraits/men/53.jpg'
    },
    {
      name: 'Olivia Martinez',
      position: 'Data Science Director',
      bio: 'Olivia leads our data science initiatives, leveraging AI and machine learning to extract actionable insights from complex datasets.',
      avatar: 'https://randomuser.me/api/portraits/women/74.jpg'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions that give our clients a competitive edge.'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality in our deliverables and exceeding client expectations.'
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our business dealings and relationships, building trust through transparency and honesty.'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaborative problem-solving, both within our team and in partnership with our clients.'
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
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in">
            We're a Team of <span className="text-gradient">Tech Enthusiasts</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 animate-slide-in" style={{ animationDelay: '100ms' }}>
            Since 2010, we've been helping businesses leverage technology to achieve their goals, innovate, and grow in an increasingly digital world.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={sectionRef} className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={cn(
                "inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}>
                Our Story
              </div>
              <h2 className={cn(
                "text-3xl md:text-4xl font-bold mb-6",
                isVisible ? "animate-slide-in" : "opacity-0"
              )}>
                From Startup to <span className="text-gradient">Pioneers</span>
              </h2>
              <div className={cn(
                "space-y-6",
                isVisible ? "animate-slide-in delay-100" : "opacity-0"
              )}>
                <p className="text-muted-foreground">
                  Tritva Tech was founded in 2024 with a simple mission: to help businesses leverage technology to achieve their goals. What began as a small team of passionate technologists has grown into a full-service IT company with a global presence.
                </p>
                <p className="text-muted-foreground">
                  Throughout our journey, we've remained committed to our core values of innovation, excellence, integrity, and collaboration. These principles guide everything we do, from how we develop solutions to how we interact with our clients and each other.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to serve clients across various industries, helping them navigate the complex digital landscape and transform their businesses through technology. Our team combines deep technical expertise with business acumen to deliver solutions that not only solve technical challenges but also drive business growth and innovation.
                </p>
              </div>
              
              {/* <div className={cn(
                "grid grid-cols-2 gap-6 mt-8",
                isVisible ? "animate-fade-in delay-300" : "opacity-0"
              )}>
                {[
                  { icon: Users, label: 'Team Members', value: '50+' },
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
              
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Founded</div>
                      <div className="text-xl font-bold">2010</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Expertise</div>
                      <div className="text-xl font-bold">11+ Technologies</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <Globe size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Global Presence</div>
                      <div className="text-xl font-bold">5 Countries</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-12 -left-12 h-64 w-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-bg-subtle">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Principles That <span className="text-gradient">Guide Us</span>
            </h2>
            <p className="text-muted-foreground">
              Our core values define who we are and how we work. They shape our culture and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-8 text-center hover-card">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      {/* <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet The <span className="text-gradient">Experts</span>
            </h2>
            <p className="text-muted-foreground">
              Our talented team brings together diverse skills and experiences to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card p-6 hover-card">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-white shadow-md"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-primary text-sm font-medium mb-4">{member.position}</div>
                  <p className="text-muted-foreground">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    {['twitter', 'linkedin', 'github'].map((social, socialIndex) => (
                      <a 
                        key={socialIndex}
                        href="#" 
                        className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Careers Section */}
      {/* <section className="py-20 px-4 bg-bg-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Careers
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our <span className="text-gradient">Growing Team</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented individuals who are passionate about technology and innovation. Join our team and be part of our mission to empower businesses through technology.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Collaborative and inclusive work environment',
                  'Opportunities for professional growth and development',
                  'Work on challenging and impactful projects',
                  'Competitive compensation and benefits'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="group">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6">Current Openings</h3>
              <div className="space-y-4">
                {[
                  { title: 'Senior Full Stack Developer', location: 'San Francisco, CA', type: 'Full-time' },
                  { title: 'UX/UI Designer', location: 'Remote', type: 'Full-time' },
                  { title: 'DevOps Engineer', location: 'New York, NY', type: 'Full-time' },
                  { title: 'Data Scientist', location: 'Remote', type: 'Full-time' },
                  { title: 'Product Manager', location: 'San Francisco, CA', type: 'Full-time' }
                ].map((job, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{job.title}</h4>
                        <div className="text-sm text-muted-foreground">
                          {job.location} • {job.type}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Apply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work <span className="text-gradient">Together</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking to join our team or partner with us on your next project, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact-us">
                <Button size="lg" className="group">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="/work">
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
