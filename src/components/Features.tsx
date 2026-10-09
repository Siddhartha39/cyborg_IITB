import React from 'react';
import { motion } from 'framer-motion';
import { Network, Bot, Cpu, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export interface FeatureItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  gradientBadge: string;
  accentColor: string;
  cardBg: string;
  borderGlow: string;
  specs: string[];
  techDetails: {
    bandwidth: string;
    latency: string;
    interfaceType: string;
    coherence: string;
  };
}

interface FeaturesProps {
  onSelectFeature: (feature: FeatureItem) => void;
}

export const featureList: FeatureItem[] = [
  {
    id: 'neural-interface',
    num: '01',
    title: 'Neural Interface',
    tagline: 'BIO-DIRECT SYNAPSE LINK',
    description: 'Connect human intelligence with next-generation machine processing. Seamlessly translate mental intent into instant algorithmic action with zero cognitive strain.',
    image: '/assets/feature-neural.jpg',
    gradientBadge: 'from-[#8855FF] to-[#00D9FF]',
    accentColor: '#8855FF',
    cardBg: 'from-[#F1E8FF]/60 via-[#F8F4FF] to-white',
    borderGlow: 'hover:border-[#8855FF]/40 hover:shadow-[0_20px_50px_-10px_rgba(136,85,255,0.25)]',
    specs: [
      'Bidirectional synaptic bio-transceiver',
      'Optical nanophotonic fiber bridge',
      'Cognitive load automated balancing',
      'Instantaneous language & concept streaming',
    ],
    techDetails: {
      bandwidth: '10.4 Tb/s per hemisphere',
      latency: '0.42 ms photon transit',
      interfaceType: 'Non-invasive Sub-dermal Nanomesh',
      coherence: '99.98% Quantum Coherence',
    },
  },
  {
    id: 'cybernetic-augmentation',
    num: '02',
    title: 'Cybernetic Augmentation',
    tagline: 'HYPER-MOTOR REINFORCEMENT',
    description: 'Explore the intersection of advanced robotics, human interaction, and intelligent technology. Dynamic lightweight alloys paired with intuitive tactile feedback.',
    image: '/assets/feature-cybernetic.jpg',
    gradientBadge: 'from-[#00D9FF] to-[#4263FF]',
    accentColor: '#00D9FF',
    cardBg: 'from-[#E5F3FF]/60 via-[#F2F8FF] to-white',
    borderGlow: 'hover:border-[#00D9FF]/40 hover:shadow-[0_20px_50px_-10px_rgba(0,217,255,0.25)]',
    specs: [
      'Liquid titanium-ceramic kinetic articulation',
      'Ultra-dense synthetic myofibril actuators',
      'Micro-haptic multi-point tactile feedback',
      'Sub-millimeter kinetic trajectory compensation',
    ],
    techDetails: {
      bandwidth: '5.2 GHz Motor Bus',
      latency: '0.18 ms Reflex Arc',
      interfaceType: 'Aero-ceramic Skeleton Matrix',
      coherence: '100% Biomechanical Coupling',
    },
  },
  {
    id: 'adaptive-intelligence',
    num: '03',
    title: 'Adaptive Intelligence',
    tagline: 'AUTONOMOUS CO-EVOLUTION',
    description: 'Discover systems designed to adapt, learn, and evolve. An ever-learning cognitive coprocessor that mirrors human plasticity while multiplying analytical throughput.',
    image: '/assets/feature-adaptive.jpg',
    gradientBadge: 'from-[#FF4FA3] to-[#FF8A00]',
    accentColor: '#FF4FA3',
    cardBg: 'from-[#FFE5F1]/60 via-[#FFF2F8] to-white',
    borderGlow: 'hover:border-[#FF4FA3]/40 hover:shadow-[0_20px_50px_-10px_rgba(255,79,163,0.25)]',
    specs: [
      'Self-reconfiguring tensor network graphs',
      'Predictive intent synthesis engine',
      'Contextual memory hyper-compression',
      'Infinite scale cognitive expansion',
    ],
    techDetails: {
      bandwidth: '48.6 PetaOPS Synaptic Capacity',
      latency: 'Instant Predictive Inference',
      interfaceType: 'Quantum Neuromorphic Array',
      coherence: 'Dynamic Self-Stabilizing',
    },
  },
];

export const Features: React.FC<FeaturesProps> = ({ onSelectFeature }) => {
  return (
    <section id="technology" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Ambient background gradients */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#F1E8FF] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FFE5F1] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#DDFBF0] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1E8FF] border border-[#E3D3FF] text-[#8855FF] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm"
          >
            <Layers className="w-3.5 h-3.5" />
            CORE CAPABILITIES
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#202033] tracking-tight mb-6"
          >
            BEYOND THE LIMITS <br />
            <span className="gradient-text">OF BIOLOGY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed"
          >
            Our tripartite cybernetic architecture bridges biological potential with synthetic scale, forging an unprecedented synthesis of mind, body, and compute.
          </motion.p>
        </div>

        {/* Three Modern Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {featureList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`relative rounded-[2rem] bg-gradient-to-b ${item.cardBg} border border-white/80 p-6 sm:p-7 shadow-[0_10px_30px_-8px_rgba(136,85,255,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group ${item.borderGlow}`}
            >
              <div>
                {/* Header: Large Number & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-black text-4xl sm:text-5xl text-[#202033]/20 group-hover:text-[#202033]/40 transition-colors">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-white text-[#202033] border border-[#E3D3FF] shadow-2xs">
                    {item.tagline}
                  </span>
                </div>

                {/* 3D Visual Artwork Frame */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-white border border-white shadow-sm p-2 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle corner badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-sm">
                    {index === 0 && <Network className="w-4 h-4 text-[#8855FF]" />}
                    {index === 1 && <Bot className="w-4 h-4 text-[#00D9FF]" />}
                    {index === 2 && <Cpu className="w-4 h-4 text-[#FF4FA3]" />}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-display font-extrabold text-2xl text-[#202033] mb-3 group-hover:text-[#8855FF] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#64748B] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Key specs bullets */}
                <div className="space-y-2.5 mb-8">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#202033]/80 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#8855FF] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Deep Dive Spec Modal */}
              <button
                onClick={() => {
                  cyberAudio.playClick();
                  onSelectFeature(item);
                }}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#F1E8FF]/80 text-[#202033] font-semibold text-xs border border-[#E3D3FF] shadow-2xs hover:shadow-sm transition-all flex items-center justify-center gap-2 group-hover:border-[#8855FF]/40"
              >
                <span>Inspect Technical Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8855FF] transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
