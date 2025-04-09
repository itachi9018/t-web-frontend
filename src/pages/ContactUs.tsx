
import Layout from '@/components/Layout';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
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
    <Layout>
      {/* Hero Section */}
      <section className="bg-bg-subtle pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 animate-slide-in" style={{ animationDelay: '100ms' }}>
            Have a project in mind or want to learn more about our services? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={sectionRef} className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className={cn(
                "glass-card p-8 h-full",
                isVisible ? "animate-fade-in delay-200" : "opacity-0"
              )}>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-8">
                  {/* <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-medium mb-2">Our Office</div>
                      <address className="text-muted-foreground not-italic">
                        123 Tech Avenue, Suite 400<br />
                        San Francisco, CA 94107<br />
                        United States
                      </address>
                    </div>
                  </div> */}
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="font-medium mb-2">Email Us</div>
                      {/* <a href="mailto:info@abctech.com" className="text-muted-foreground hover:text-primary transition-colors block mb-1">
                        info@abctech.com
                      </a> */}
                      <a href="mailto:tritvatech@gmail.com" className="text-muted-foreground hover:text-primary transition-colors block">
                        tritvatech@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="font-medium mb-2">Call Us</div>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors block mb-1">
                        +1 (555) 123-4567
                      </a>
                      <a href="tel:+15559876543" className="text-muted-foreground hover:text-primary transition-colors block">
                        +1 (555) 987-6543
                      </a>
                    </div>
                  </div> */}
                </div>
                
                {/* <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-medium mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    {['twitter', 'linkedin', 'facebook', 'instagram'].map((social, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                        aria-label={`Follow us on ${social}`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div> */}

                {/* <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-medium mb-4">Office Hours</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className={cn(
                "glass-card p-8",
                isVisible ? "animate-fade-in delay-300" : "opacity-0"
              )}>
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Please fill out the form below, and a member of our team will get back to you as soon as possible.
                  </p>
                </div>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4">
                      <CheckCircle size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h4>
                    <p className="text-green-700">
                      Your message has been sent successfully. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          className="mt-1 mr-2"
                          required
                        />
                        <span className="text-sm text-muted-foreground">
                          I agree to the processing of my personal data in accordance with the <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                        </span>
                      </label>
                    </div>
                    
                    <div>
                      <Button type="submit" size="lg" className="w-full md:w-auto group">
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* 
      <section className="py-16 px-4 bg-bg-subtle">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground">
              Visit our office to meet the team and discuss your project in person.
            </p>
          </div>

          <div className="glass-card p-4 rounded-xl overflow-hidden">
            {/* This would typically be an embedded map, but for this example we'll use an image 
            <div className="bg-secondary h-96 w-full rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium">123 Tech Avenue, San Francisco, CA 94107</p>
                <p className="text-muted-foreground">Map integration would be implemented here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about contacting and working with us.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How quickly can I expect a response?',
                answer: 'We typically respond to all inquiries within 24-48 business hours. For urgent matters, please call our office directly.'
              },
              {
                question: 'Do you work with clients internationally?',
                answer: 'Yes, we work with clients around the world. Our team is experienced in remote collaboration and can accommodate different time zones for meetings and project work.'
              },
              {
                question: 'What information should I include in my inquiry?',
                answer: 'To help us provide the most relevant response, please include details about your project, timeline, budget considerations, and any specific technologies or services you\'re interested in.'
              },
              {
                question: 'Can I schedule a consultation before committing to a project?',
                answer: 'Absolutely! We offer free initial consultations to discuss your project needs and determine if we\'re the right fit for your requirements. You can request a consultation through our contact form.'
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
