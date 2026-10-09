import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import type { FeatureItem } from './components/Features';
import { Capabilities } from './components/Capabilities';
import { NeuralCore } from './components/NeuralCore';
import { Timeline } from './components/Timeline';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FeatureModal, WaitlistModal } from './components/Modals';

export const App: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const scrollToTechnology = () => {
    const el = document.getElementById('technology');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#202033] selection:bg-[#FFE5F1] selection:text-[#8855FF]">
      {/* Top Floating Navigation */}
      <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero
          onExploreTech={scrollToTechnology}
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
        />
        <Stats />
        <Features onSelectFeature={(feat) => setSelectedFeature(feat)} />
        <Capabilities />
        <NeuralCore />
        <Timeline />
        <CTA onStartJourney={() => setIsWaitlistOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <FeatureModal
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
      />

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
};

export default App;
