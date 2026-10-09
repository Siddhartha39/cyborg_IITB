import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Activity, Cpu, Disc3 } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

interface HeroProps {
  onExploreTech: () => void;
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreTech, onOpenWaitlist }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 80]);

  // Interactive 3D tilt based on mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseFromCenterX = (e.clientX - rect.left) / width - 0.5;
    const mouseFromCenterY = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(mouseFromCenterX);
    mouseY.set(mouseFromCenterY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden flex items-center justify-center bg-white bg-futuristic-grid"
    >
      {/* Background Soft Pastel Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#E5F3FF] rounded-full blur-3xl opacity-70 -z-10 animate-float-slow pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[28rem] h-[28rem] bg-[#F1E8FF] rounded-full blur-3xl opacity-80 -z-10 animate-float-reverse pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FFE5F1] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />
      <div className="absolute top-20 right-1/3 w-72 h-72 bg-[#DDFBF0] rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Live System Protocol Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F1E8FF]/90 border border-[#E3D3FF] text-[#202033] shadow-sm mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8855FF]" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wide uppercase text-[#8855FF]">
                CYBORG ARCHITECTURE v5.2
              </span>
              <span className="text-[10px] bg-white text-[#202033] px-2 py-0.5 rounded-full font-mono border border-[#E3D3FF] shadow-2xs">
                ONLINE
              </span>
            </motion.div>

            {/* Oversized Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-[#202033] mb-6">
              MEET THE <br />
              <span className="gradient-text drop-shadow-[0_4px_24px_rgba(136,85,255,0.2)]">
                NEXT EVOLUTION
              </span> <br />
              OF HUMANITY.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#64748B] leading-relaxed max-w-xl mb-8 font-normal">
              Where human creativity meets machine intelligence. Discover a world of cybernetic innovation, intelligent systems, and limitless possibilities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary Gradient CTA */}
              <button
                onClick={() => {
                  cyberAudio.playClick();
                  onExploreTech();
                }}
                onMouseEnter={() => cyberAudio.playHover()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00D9FF] via-[#8855FF] to-[#FF4FA3] text-white font-semibold text-base shadow-[0_10px_30px_-5px_rgba(136,85,255,0.4)] hover:shadow-[0_14px_40px_-5px_rgba(255,79,163,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                <Zap className="w-4 h-4 text-[#DDFBF0] group-hover:scale-110 transition-transform" />
                <span>Explore Technology</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Pastel Glass CTA */}
              <button
                onClick={() => {
                  cyberAudio.playClick();
                  onOpenWaitlist();
                }}
                onMouseEnter={() => cyberAudio.playHover()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/80 hover:bg-[#F1E8FF]/60 text-[#202033] font-semibold text-base border border-[#E3D3FF] shadow-sm hover:shadow-[0_8px_25px_-5px_rgba(66,99,255,0.15)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#8855FF]" />
                <span>Discover the Future</span>
              </button>
            </div>

            {/* Sub-hero trust metrics */}
            <div className="mt-10 pt-6 border-t border-[#F1E8FF] flex flex-wrap items-center gap-6 text-xs text-[#64748B] font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00D9FF]" />
                <span>BIO-QUANTUM ENCRYPTED</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#8855FF]" />
                <span>SUB-MILLISECOND SYNAPSE</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#FF4FA3]" />
                <span>ZERO LATENCY CO-PROCESSOR</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Cyborg Artwork with Floating Holograms */}
          <div
            className="lg:col-span-5 relative flex items-center justify-center perspective-[1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Animated Gradient Aura Behind Hero Card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#00D9FF]/40 via-[#8855FF]/30 to-[#FF4FA3]/40 rounded-[2.5rem] blur-2xl opacity-75 -z-10 animate-pulse-slow pointer-events-none" />

            {/* 3D Tilted Card Container */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                y: yParallax,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[460px] sm:max-w-[500px] aspect-square rounded-[2rem] p-3 bg-white/60 backdrop-blur-xl border border-white shadow-[0_20px_60px_-15px_rgba(136,85,255,0.2)] transition-shadow duration-300 hover:shadow-[0_25px_70px_-10px_rgba(0,217,255,0.3)]"
            >
              {/* Outer Decorative Gradient Border */}
              <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-white shadow-inner">
                {/* 3D Cyborg Artwork */}
                <img
                  src="/assets/hero-cyborg.jpg"
                  alt="Futuristic 3D Cyborg Human-Machine Portrait"
                  className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-700 hover:scale-110"
                  loading="eager"
                />

                {/* Subtle Iridescent Sheen Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10 pointer-events-none" />
                
                {/* Live Audio / Neural Frequency HUD bar inside bottom of image */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/80 backdrop-blur-md rounded-xl p-2.5 border border-white/90 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Disc3 className="w-4 h-4 text-[#8855FF] animate-spin-slow" />
                    <span className="font-mono text-[11px] font-semibold text-[#202033]">
                      CORE_NEURAL_SYNAPSE
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-[#00D9FF] font-bold">
                    <span>99.98% COHERENT</span>
                  </div>
                </div>
              </div>

              {/* Floating Holographic Card 1 - Top Left */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                  rotate: [-1, 2, -1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transform: 'translateZ(40px)' }}
                className="absolute -top-6 -left-6 sm:-left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-3.5 border border-white shadow-[0_10px_30px_-5px_rgba(0,217,255,0.25)] flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E5F3FF] border border-[#CAE5FF] flex items-center justify-center text-[#4263FF]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B]">
                    Synaptic Latency
                  </div>
                  <div className="font-display font-extrabold text-base text-[#202033] flex items-center gap-1">
                    0.12 ms <span className="text-[10px] font-mono text-[#00D9FF] font-bold">▲ 400%</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Holographic Card 2 - Bottom Right */}
              <motion.div
                animate={{
                  y: [6, -6, 6],
                  rotate: [1, -2, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{ transform: 'translateZ(50px)' }}
                className="absolute -bottom-6 -right-6 sm:-right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-3.5 border border-white shadow-[0_12px_35px_-5px_rgba(255,79,163,0.3)] flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFE5F1] border border-[#FFCCE4] flex items-center justify-center text-[#FF4FA3]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B]">
                    Neural Flux Density
                  </div>
                  <div className="font-display font-extrabold text-base text-[#202033] flex items-center gap-1">
                    142.8 TFLOPS <span className="text-[10px] font-mono text-[#8855FF] font-bold">MAX</span>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting Translucent Glass Ring */}
              <div className="absolute -inset-8 rounded-full border border-dashed border-[#8855FF]/20 animate-spin-slow pointer-events-none -z-10" />
              <div className="absolute -inset-16 rounded-full border border-[#00D9FF]/20 animate-spin-reverse-slow pointer-events-none -z-10" />

              {/* Floating Colorful Orbiting Sphere */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 right-8 w-6 h-6 rounded-full bg-gradient-to-tr from-[#00D9FF] to-[#8855FF] shadow-[0_0_20px_#00D9FF] z-20"
              />
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-16 -left-4 w-5 h-5 rounded-full bg-gradient-to-tr from-[#FF4FA3] to-[#8855FF] shadow-[0_0_15px_#FF4FA3] z-20"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
