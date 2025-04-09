
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ApproachSection from '@/components/ApproachSection';
import WorkSection from '@/components/WorkSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <ApproachSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
