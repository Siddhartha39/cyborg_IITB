import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Cpu, Sparkles, Orbit, Compass, ArrowRight, Check } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export const Timeline: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const milestones = [
    {
      year: '2026',
      title: 'Digital Intelligence',
      badge: 'PHASE 01 // FOUNDATION',
      description: 'First generation high-bandwidth cognitive coprocessors and algorithmic intent mapping algorithms deployed to consumer bio-wearables.',
      gradient: 'from-[#00D9FF] to-[#4263FF]',
      cardBg: 'from-[#E5F3FF]/70 to-white',
      borderColor: 'border-[#CAE5FF]',
      icon: Cpu,
      achievements: [
        'Multi-modal predictive intent decoding',
        'Sub-10ms cognitive assist latency',
        'Non-invasive dermal biosensors',
      ],
    },
    {
      year: '2030',
      title: 'Neural Integration',
      badge: 'PHASE 02 // SYNAPSE',
      description: 'Breakthrough nanophotonic synaptic bridges enable bidirectional real-time knowledge synthesis and instantaneous language synthesis.',
      gradient: 'from-[#8855FF] to-[#00D9FF]',
      cardBg: 'from-[#F1E8FF]/70 to-white',
      borderColor: 'border-[#E3D3FF]',
      icon: Orbit,
      achievements: [
        'Direct optical synaptic interface bus',
        '100x acceleration in complex mental problem solving',
        'Self-calibrating neural mesh fabrics',
      ],
    },
    {
      year: '2040',
      title: 'Human-Machine Symbiosis',
      badge: 'PHASE 03 // SYMBIOSIS',
      description: 'Seamless biomechanical and neuro-synthetic integration. Physical fatigue eliminated through smart myofibril augmentation and kinetic regenerative power.',
      gradient: 'from-[#FF4FA3] to-[#8855FF]',
      cardBg: 'from-[#FFE5F1]/70 to-white',
      borderColor: 'border-[#FFCCE4]',
      icon: Sparkles,
      achievements: [
        'Fluid biomechanical kinetic coupling',
        'Universal sensory augmentation suite',
        'Autonomous zero-latency cellular repairs',
      ],
    },
    {
      year: '2050+',
      title: 'Beyond Biological Limits',
      badge: 'PHASE 04 // TRANSCENDENCE',
      description: 'Unbounded cognitive expansion across quantum spatial dimensions. Collective intelligence architectures and biological longevity liberation.',
      gradient: 'from-[#FF4FA3] via-[#8855FF] to-[#00D9FF]',
      cardBg: 'from-[#DDFBF0]/70 via-[#F1E8FF]/40 to-white',
      borderColor: 'border-[#B6F7DC]',
      icon: Compass,
      achievements: [
        'Multi-dimensional quantum mind federation',
        'Indefinite cognitive preservation & continuity',
        'Complete harmonic symbiosis with global systems',
      ],
    },
  ];

  return (
    <section id="timeline" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background soft ambient orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#F1E8FF] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFE5F1] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE5F1] border border-[#FFCCE4] text-[#FF4FA3] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            CHRONOLOGICAL HORIZON
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#202033] tracking-tight mb-5"
          >
            THE JOURNEY TO <br />
            <span className="gradient-text">TOMORROW</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed"
          >
            A speculative timeline charting our evolutionary roadmap from digital assistance to unbounded post-biological intelligence.
          </motion.p>
        </div>

        {/* Desktop & Tablet Timeline Stepper */}
        <div className="relative">
          {/* Gradient Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-1 bg-gradient-to-r from-[#00D9FF] via-[#8855FF] to-[#FF4FA3] -z-0 opacity-40 rounded-full" />

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isSelected = selectedMilestone === index;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  onClick={() => {
                    cyberAudio.playClick();
                    setSelectedMilestone(index);
                  }}
                  onMouseEnter={() => cyberAudio.playHover()}
                  className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${item.cardBg} border ${
                    isSelected ? 'border-[#8855FF] shadow-[0_15px_40px_-5px_rgba(136,85,255,0.25)] ring-2 ring-[#8855FF]/30' : `${item.borderColor} shadow-sm`
                  } backdrop-blur-md transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between`}
                >
                  <div>
                    {/* Top Node Indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.gradient} p-0.5 shadow-md flex items-center justify-center`}>
                        <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#202033]" />
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#8855FF] bg-white px-2.5 py-1 rounded-full border border-[#E3D3FF] shadow-2xs">
                        {item.badge}
                      </span>
                    </div>

                    {/* Big Year Heading */}
                    <div className="font-display font-black text-3xl sm:text-4xl text-[#202033] tracking-tight mb-2">
                      {item.year}
                    </div>

                    {/* Milestone Title */}
                    <h3 className="font-display font-bold text-lg text-[#202033] mb-3">
                      {item.title}
                    </h3>

                    {/* Milestone Description */}
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Achievements List */}
                    <div className="space-y-2 pt-4 border-t border-white/80">
                      {item.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-[#202033]/80 font-medium">
                          <Check className="w-3.5 h-3.5 text-[#00D9FF] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Indicator Pin */}
                  <div className="mt-6 pt-3 flex items-center justify-between text-xs font-mono">
                    <span className={`font-bold ${isSelected ? 'text-[#8855FF]' : 'text-[#64748B]'}`}>
                      {isSelected ? 'SELECTED ERA' : 'VIEW DETAILS'}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#8855FF]' : 'text-[#64748B]'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline speculative disclaimer */}
        <div className="mt-14 text-center">
          <p className="text-xs font-mono text-[#64748B]">
            *Speculative evolutionary trajectory created for artistic concept presentation.
          </p>
        </div>

      </div>
    </section>
  );
};
