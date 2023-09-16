import AboutSection from '@/components/pages/Home/AboutSection';
import Banner from '@/components/pages/Home/Banner';
import ContactSection from '@/components/pages/Home/ContactSection';
import EnsureSection from '@/components/pages/Home/EnsureSection';
import FeatureSection from '@/components/pages/Home/FeatureSection';
import Footer from '@/components/shared/Footer';

export default function HomeLanding() {
  return (
    <main>
      <Banner />
      <FeatureSection />
      <AboutSection />
      <EnsureSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
