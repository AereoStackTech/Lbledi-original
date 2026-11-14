import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SpecialtiesShowcase from '@/components/sections/SpecialtiesShowcase';
import BeldiMenu from '@/components/sections/BeldiMenu';
import LocationHours from '@/components/sections/LocationHours';
import WhatsAppInquiry from '@/components/sections/WhatsAppInquiry';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-parchment-cream text-ink-espresso">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SpecialtiesShowcase />
        <BeldiMenu />
        <LocationHours />
        <WhatsAppInquiry />
      </main>
      <Footer />
    </div>
  );
}
