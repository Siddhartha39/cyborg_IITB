import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

interface CTAProps {
  onStartJourney: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onStartJourney }) => {
  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-white via-[#F1E8FF]/40 to-[#FFE5F1]/30">
      
      {/* Decorative Floating Colorful Chrome & Glass Spheres */}
      <motion.div
        animate={{
          y: [-12, 12, -12],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-10 sm:left-24 w-20 h-20 rounded-full bg-gradient-to-tr from-[#00D9FF]/40 via-[#8855FF]/30 to-[#FF4FA3]/40 backdrop-blur-xl border border-white shadow-[0_10px_30px_rgba(0,217,255,0.25)] -z-0 pointer-events-none"
      />

      <motion.div
        animate={{
          y: [14, -14, 14],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 right-10 sm:right-28 w-28 h-28 rounded-full bg-gradient-to-tr from-[#FF4FA3]/40 via-[#8855FF]/30 to-[#DDFBF0]/40 backdrop-blur-xl border border-white shadow-[0_15px_35px_rgba(255,79,163,0.25)] -z-0 pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-gradient-to-tr from-[#00D9FF] to-[#8855FF] opacity-60 blur-xs -z-0 pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative rounded-[3rem] p-8 sm:p-14 lg:p-16 bg-white/80 backdrop-blur-2xl border border-white shadow-[0_25px_70px_-15px_rgba(136,85,255,0.2)] text-center overflow-hidden">
          
          {/* Subtle internal iridescent radial wash */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E5F3FF]/50 via-transparent to-[#FFE5F1]/50 pointer-events-none" />

          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1E8FF] border border-[#E3D3FF] text-[#8855FF] text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            EARLY GENESIS ACCESS
          </motion.div>

          {/* Big Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#202033] tracking-tight mb-6"
          >
            THE FUTURE IS <br />
            <span className="gradient-text">YOURS TO CREATE.</span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-[#64748B] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Step into a world where imagination meets intelligent technology. Experience the seamless synergy of biological insight and cybernetic capability.
          </motion.p>

          {/* Prominent Gradient CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => {
                cyberAudio.playClick();
                onStartJourney();
              }}
              onMouseEnter={() => cyberAudio.playHover()}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#00D9FF] via-[#8855FF] to-[#FF4FA3] text-white font-display font-extrabold text-lg shadow-[0_12px_40px_-5px_rgba(136,85,255,0.45)] hover:shadow-[0_16px_50px_-5px_rgba(255,79,163,0.6)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group"
            >
              <Sparkles className="w-5 h-5 text-[#DDFBF0] group-hover:scale-120 transition-transform" />
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </button>
          </motion.div>

          {/* Micro assurances */}
          <div className="mt-10 pt-8 border-t border-[#F1E8FF] flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-[#64748B]">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Instant Telemetry Sandbox</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8855FF]" />
              <span>Non-Invasive Neural Security</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
              <span>Genesis Cohort Open (42 Slots Left)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
