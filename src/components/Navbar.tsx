import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Menu, X, Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

interface NavbarProps {
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(cyberAudio.enabled);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const isNow = cyberAudio.toggle();
    setSoundEnabled(isNow);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Technology', href: '#technology' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Neural Core', href: '#neural-core' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-[0_12px_35px_-8px_rgba(136,85,255,0.12)] border border-white/90'
            : 'bg-white/70 backdrop-blur-md shadow-[0_8px_25px_-10px_rgba(136,85,255,0.06)] border border-white/60'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={() => cyberAudio.playClick()}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00D9FF] via-[#8855FF] to-[#FF4FA3] p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-sm">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-[#8855FF] transition-colors group-hover:text-[#FF4FA3]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base tracking-tight text-[#202033] flex items-center gap-1">
              CYBORG<span className="text-[#00D9FF] font-black">//</span><span className="text-[#8855FF]">OS</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#64748B] -mt-1 uppercase">
              GEN-V SYNAPSE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playClick()}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-[#202033]/80 hover:text-[#8855FF] hover:bg-[#F1E8FF]/60 transition-all duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#00D9FF] to-[#FF4FA3] -translate-x-1/2 transition-all duration-300 group-hover:w-1/2 rounded-full" />
            </a>
          ))}
        </div>

        {/* Right CTA + Audio Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio Synthesizer toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Disable cyber UI audio' : 'Enable futuristic cyber UI audio'}
            className="w-9 h-9 rounded-full bg-[#F1E8FF]/80 hover:bg-[#F1E8FF] border border-[#E3D3FF] flex items-center justify-center text-[#8855FF] transition-all hover:scale-105"
            aria-label="Toggle audio feedback"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#8855FF] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#64748B]" />
            )}
          </button>

          {/* Gradient CTA Button */}
          <button
            onClick={() => {
              cyberAudio.playClick();
              onOpenWaitlist();
            }}
            onMouseEnter={() => cyberAudio.playHover()}
            className="relative group overflow-hidden rounded-full p-[1.5px] font-medium transition-transform duration-300 active:scale-95 shadow-[0_4px_20px_-2px_rgba(136,85,255,0.35)] hover:shadow-[0_8px_25px_-2px_rgba(255,79,163,0.45)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] via-[#8855FF] to-[#FF4FA3] animate-gradient-x" />
            <span className="relative flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-white text-xs sm:text-sm font-semibold text-[#202033] group-hover:bg-opacity-0 group-hover:text-white transition-all duration-300">
              <Sparkles className="w-3.5 h-3.5 text-[#8855FF] group-hover:text-white transition-colors" />
              <span>Explore the Future</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-[#F1E8FF] border border-[#E3D3FF] flex items-center justify-center text-[#202033]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-2xl rounded-2xl p-4 shadow-[0_20px_50px_-10px_rgba(136,85,255,0.2)] border border-[#E3D3FF]"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    cyberAudio.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#202033] hover:text-[#8855FF] hover:bg-[#F1E8FF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-[#F1E8FF] mt-1">
                <button
                  onClick={() => {
                    cyberAudio.playClick();
                    setMobileMenuOpen(false);
                    onOpenWaitlist();
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#00D9FF] via-[#8855FF] to-[#FF4FA3] text-white text-sm font-semibold shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Explore the Future
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
