import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye, Shield, Cpu, Activity, Sliders, ChevronRight } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [intensity, setIntensity] = useState(75);

  const capabilities = [
    {
      id: 'cognitive',
      icon: Cpu,
      title: 'Cognitive Synthesis',
      tag: 'CORTEX ACCELERATOR',
      shortDesc: 'Multiply analytical bandwidth by 100x through real-time tensor bridging.',
      color: 'from-[#00D9FF] to-[#8855FF]',
      badgeColor: 'text-[#00D9FF] bg-[#E5F3FF] border-[#CAE5FF]',
      stats: [
        { label: 'Synthetic Synaptic Nodes', val: '2.4 Trillion' },
        { label: 'Thought Decoupling Delay', val: '0.08 ms' },
        { label: 'Parallel Logic Threads', val: '64 Concurrent' },
      ],
      details: 'Instant access to global mathematical knowledge bases. Synthesizes hypothesis generation and computational verification directly in human stream-of-consciousness.',
    },
    {
      id: 'kinetic',
      icon: Zap,
      title: 'Cybernetic Mobility',
      tag: 'KINETIC EXOSYSTEM',
      shortDesc: 'Ultra-lightweight titanium-alloy articulation with regenerative bio-power.',
      color: 'from-[#8855FF] to-[#FF4FA3]',
      badgeColor: 'text-[#8855FF] bg-[#F1E8FF] border-[#E3D3FF]',
      stats: [
        { label: 'Tensile Strength', val: '1,420 MPa' },
        { label: 'Reflex Amplification', val: '450%' },
        { label: 'Energy Recovery Efficiency', val: '94.2%' },
      ],
      details: 'Featherlight biomechanical actuators harmonize with natural muscle fibers, eliminating musculoskeletal fatigue while enabling superhuman precision and strength.',
    },
    {
      id: 'sensory',
      icon: Eye,
      title: 'Sensory Expansion',
      tag: 'OPTIC & ACOUSTIC MESH',
      shortDesc: 'Expand vision into infrared, ultraviolet, and wireless electromagnetic spectrums.',
      color: 'from-[#FF4FA3] to-[#FF8A00]',
      badgeColor: 'text-[#FF4FA3] bg-[#FFE5F1] border-[#FFCCE4]',
      stats: [
        { label: 'Spectral Range', val: '10nm - 1mm' },
        { label: 'Spatial Resolution', val: '32K Bio-Retina' },
        { label: 'Acoustic Sensitivity', val: '2 Hz - 180 kHz' },
      ],
      details: 'Perceive electromagnetic fields, micro-thermal distributions, and high-frequency acoustic waves translated smoothly into instinctive human sensory perceptions.',
    },
    {
      id: 'resilience',
      icon: Shield,
      title: 'Autonomous Resilience',
      tag: 'CELLULAR NANOBOTS',
      shortDesc: 'Self-repairing nanobotic swarms for continuous biological health monitoring.',
      color: 'from-[#00D9FF] via-[#4263FF] to-[#8855FF]',
      badgeColor: 'text-[#059669] bg-[#DDFBF0] border-[#B6F7DC]',
      stats: [
        { label: 'Active Nanobot Units', val: '850M Units' },
        { label: 'Pathogen Neutralization', val: '< 30 Seconds' },
        { label: 'Vascular Cleanliness', val: '99.99%' },
      ],
      details: 'Autonomous microscopic guardians patrol internal circulatory pathways, eliminating physiological pathogens and accelerating cellular regeneration.',
    },
  ];

  const current = capabilities[activeTab];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E5F3FF] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#F1E8FF] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDFBF0] border border-[#B6F7DC] text-[#059669] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm"
          >
            <Activity className="w-3.5 h-3.5" />
            HUMAN × MACHINE AUGMENTATION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#202033] tracking-tight mb-5"
          >
            AUGMENTED <br />
            <span className="gradient-text">CAPABILITIES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed"
          >
            Explore modular cybernetic augmentations engineered to amplify human endurance, perception, and cognition.
          </motion.p>
        </div>

        {/* Interactive Capability Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabs Column */}
          <div className="lg:col-span-5 space-y-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={cap.id}
                  onClick={() => {
                    cyberAudio.playClick();
                    setActiveTab(idx);
                  }}
                  onMouseEnter={() => cyberAudio.playHover()}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-white to-[#F1E8FF]/60 border-[#8855FF] shadow-[0_10px_30px_-5px_rgba(136,85,255,0.2)] ring-1 ring-[#8855FF]/30'
                      : 'bg-white hover:bg-[#F8F4FF]/50 border-[#E3D3FF] shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform ${
                        isSelected
                          ? 'bg-gradient-to-tr from-[#00D9FF] to-[#8855FF] text-white shadow-sm scale-105'
                          : 'bg-[#F1E8FF] text-[#8855FF]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-base text-[#202033]">
                        {cap.title}
                      </div>
                      <div className="text-xs text-[#64748B] font-mono">
                        {cap.tag}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isSelected ? 'text-[#8855FF] translate-x-1' : 'text-[#64748B]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Display Box */}
          <div className="lg:col-span-7 rounded-[2.5rem] bg-gradient-to-b from-[#F1E8FF]/40 via-white to-white border border-[#E3D3FF] p-6 sm:p-10 shadow-[0_15px_45px_-10px_rgba(136,85,255,0.12)]">
            
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${current.badgeColor}`}>
                {current.tag}
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping" />
                <span>ACTIVE CALIBRATION</span>
              </div>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#202033] mb-3">
              {current.title}
            </h3>

            <p className="text-base text-[#64748B] leading-relaxed mb-8">
              {current.details}
            </p>

            {/* Metrics Breakdown Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {current.stats.map((s, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-[#E3D3FF] shadow-2xs">
                  <div className="text-[11px] font-mono text-[#64748B] mb-1">
                    {s.label}
                  </div>
                  <div className="font-display font-black text-xl text-[#202033]">
                    {s.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Simulation Slider */}
            <div className="p-5 rounded-2xl bg-[#F8F4FF] border border-[#E3D3FF]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#202033]">
                  <Sliders className="w-4 h-4 text-[#8855FF]" />
                  <span>SIMULATED AMPLIFICATION LEVEL</span>
                </div>
                <span className="font-mono text-xs font-bold text-[#8855FF]">
                  {intensity}% CAPACITY
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={intensity}
                onChange={(e) => {
                  cyberAudio.playHover();
                  setIntensity(Number(e.target.value));
                }}
                className="w-full accent-[#8855FF] h-2 bg-white rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#64748B] mt-1.5">
                <span>Safe Human Baseline</span>
                <span>Bio-Harmonized Max</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
