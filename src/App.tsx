import React, { useState } from 'react';
import { BrutalistNav } from '@/components/BrutalistNav';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { GallerySection } from '@/components/GallerySection';
import { ContactSection } from '@/components/ContactSection';
import { Skiper31 } from '@/components/ui/text-scroll-animation';
import { Footer } from '@/components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBEA]">
      {/* Neo-Brutalist Navigation Bar */}
      <BrutalistNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main View Router */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <HeroSection 
              onExploreGallery={() => setActiveTab('gallery')} 
              onContactMe={() => setActiveTab('contact')} 
            />
            {/* Lenis Kinetic Text Scroll Animation Component */}
            <Skiper31 />
            <AboutSection />
            <GallerySection />
            <ContactSection />
          </>
        )}

        {activeTab === 'about' && (
          <div className="py-6">
            <AboutSection />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="py-6">
            <GallerySection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="py-6">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
