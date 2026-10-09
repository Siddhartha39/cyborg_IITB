import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Infinity as InfinityIcon, ArrowUpRight } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export const Stats: React.FC = () => {
  const stats = [
    {
      value: '99.98%',
      label: 'System Integrity',
      sublabel: 'Zero cognitive degradation',
      icon: Shield,
      bgGradient: 'from-[#DDFBF0] to-[#E5F3FF]',
      borderColor: 'border-[#B6F7DC]',
      iconBg: 'bg-[#DDFBF0]',
      iconColor: 'text-[#059669]',
      glowColor: 'hover:shadow-[0_14px_35px_-8px_rgba(5,150,105,0.25)]',
      accentTag: 'FAULT-TOLERANT',
    },
    {
      value: '1.2ms',
      label: 'Neural Response',
      sublabel: 'Sub-synaptic reflex feedback',
      icon: Zap,
      bgGradient: 'from-[#E5F3FF] to-[#F1E8FF]',
      borderColor: 'border-[#CAE5FF]',
      iconBg: 'bg-[#E5F3FF]',
      iconColor: 'text-[#00D9FF]',
      glowColor: 'hover:shadow-[0_14px_35px_-8px_rgba(0,217,255,0.3)]',
      accentTag: 'REAL-TIME',
    },
    {
      value: '24/7',
      label: 'Active Intelligence',
      sublabel: 'Perpetual quantum synthesis',
      icon: Cpu,
      bgGradient: 'from-[#F1E8FF] to-[#FFE5F1]',
      borderColor: 'border-[#E3D3FF]',
      iconBg: 'bg-[#F1E8FF]',
      iconColor: 'text-[#8855FF]',
      glowColor: 'hover:shadow-[0_14px_35px_-8px_rgba(136,85,255,0.3)]',
      accentTag: 'CONTINUOUS',
    },
    {
      value: '∞',
      label: 'Evolution Potential',
      sublabel: 'Self-adapting neuro-pathways',
      icon: InfinityIcon,
      bgGradient: 'from-[#FFE5F1] to-[#FFF2D6]',
      borderColor: 'border-[#FFCCE4]',
      iconBg: 'bg-[#FFE5F1]',
      iconColor: 'text-[#FF4FA3]',
      glowColor: 'hover:shadow-[0_14px_35px_-8px_rgba(255,79,163,0.3)]',
      accentTag: 'UNBOUNDED',
    },
  ];

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-white">
      {/* Decorative subtle ambient lights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header info */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#F1E8FF]/80">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#8855FF] block mb-1">
              ARCHITECTURAL TELEMETRY
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#202033]">
              Real-Time Performance Indices
            </h2>
          </div>
          <span className="text-xs font-mono text-[#64748B] mt-2 sm:mt-0">
            *Illustrative architectural concept telemetry
          </span>
        </div>

        {/* 4 Pastel Statistic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => cyberAudio.playHover()}
                className={`relative group rounded-3xl p-6 bg-gradient-to-br ${stat.bgGradient} border ${stat.borderColor} shadow-sm transition-all duration-300 hover:-translate-y-1.5 ${stat.glowColor}`}
              >
                {/* Header inside card */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${stat.iconBg} border border-white flex items-center justify-center ${stat.iconColor} shadow-sm transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/80 text-[#202033] border border-white shadow-2xs">
                    {stat.accentTag}
                  </span>
                </div>

                {/* Big Metric Value */}
                <div className="font-display font-black text-4xl sm:text-5xl text-[#202033] tracking-tight mb-2 group-hover:scale-105 transform origin-left transition-transform">
                  {stat.value}
                </div>

                {/* Metric Label */}
                <div className="text-base font-bold text-[#202033] mb-1 flex items-center justify-between">
                  <span>{stat.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#64748B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Sub-label */}
                <div className="text-xs font-mono text-[#64748B]">
                  {stat.sublabel}
                </div>

                {/* Bottom subtle progress indicator line */}
                <div className="mt-4 pt-3 border-t border-white/60 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                  <span>NODE {index + 1} // NOMINAL</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
