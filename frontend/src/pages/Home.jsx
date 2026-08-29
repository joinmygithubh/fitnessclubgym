import React from 'react';
import HeroSection from '../components/home/HeroSection';
import QuickInfoBar from '../components/home/QuickInfoBar';
import AboutSection from '../components/home/AboutSection';
import OwnerSection from '../components/home/OwnerSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TimingsSection from '../components/home/TimingsSection';
import MembershipCTA from '../components/home/MembershipCTA';
import GalleryPreview from '../components/home/GalleryPreview';
import LocationSection from '../components/home/LocationSection';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <QuickInfoBar />
      <AboutSection />
      <OwnerSection />
      <ServicesSection />
      <WhyChooseUs />
      <TimingsSection />
      <MembershipCTA />
      <GalleryPreview />
      <LocationSection />
      <ContactCTA />
    </div>
  );
};

export default Home;
