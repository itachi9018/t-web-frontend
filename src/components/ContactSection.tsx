
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}


const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Ensure that the name attribute in the input matches the property names in formData
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form is being submitted");
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Send the form data to your backend (or email service)
      const response = await axios.post('http://localhost:5000/api/contact', formData); // adjust API endpoint
      if (response.status === 200) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        });
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
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
      className="py-20 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={cn(
            "inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            Contact Us
          </div>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6",
            isVisible ? "animate-slide-in" : "opacity-0"
          )}>
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className={cn(
            "text-muted-foreground",
            isVisible ? "animate-slide-in delay-100" : "opacity-0"
          )}>
            Have a project in mind or want to learn more about our services? Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className={cn(
              "glass-card p-8 h-full",
              isVisible ? "animate-fade-in delay-200" : "opacity-0"
            )}>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {/* <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Our Office</div>
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
                    <div className="font-medium mb-1">Email Us</div>
                    {/* <a href="mailto:info@abctech.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@abctech.com
                    </a> */}
                    <div className="mt-1">
                      <a href="mailto:tritvatech@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        tritvatech@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Call Us</div>
                    <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (555) 123-4567
                    </a>
                    <div className="mt-1">
                      <a href="tel:+15559876543" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (555) 987-6543
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
              
              {/* <div className="mt-8">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {['twitter', 'linkedin', 'facebook', 'instagram'].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
          
          <div className="lg:col-span-3">
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>Message sent successfully!</div>}
              <div className={cn(
                "glass-card p-8",
                isVisible ? "animate-fade-in delay-300" : "opacity-0"
              )}>
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit"  disabled={loading} size="lg" className="w-full md:w-auto group">
                      {loading ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
