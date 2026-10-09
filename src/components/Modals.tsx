import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle, ArrowRight, User, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { FeatureItem } from './Features';
import { cyberAudio } from '../utils/audio';

interface FeatureModalProps {
  feature: FeatureItem | null;
  onClose: () => void;
  onOpenWaitlist: () => void;
}

export const FeatureModal: React.FC<FeatureModalProps> = ({ feature, onClose, onOpenWaitlist }) => {
  if (!feature) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#202033]/30 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-[0_25px_70px_-15px_rgba(136,85,255,0.35)] border border-white p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Top header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#F1E8FF] mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-white bg-gradient-to-r from-[#00D9FF] to-[#8855FF] px-3 py-1 rounded-full shadow-2xs">
                MODULE {feature.num}
              </span>
              <span className="font-mono text-xs text-[#64748B] tracking-wider uppercase">
                {feature.tagline}
              </span>
            </div>
            <button
              onClick={() => {
                cyberAudio.playClick();
                onClose();
              }}
              className="w-8 h-8 rounded-full bg-[#F1E8FF] hover:bg-[#E3D3FF] flex items-center justify-center text-[#202033] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
            <div className="sm:col-span-5 aspect-square rounded-2xl overflow-hidden border border-white shadow-sm bg-[#F1E8FF]">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:col-span-7">
              <h3 className="font-display font-extrabold text-2xl text-[#202033] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                {feature.description}
              </p>
              
              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-[#E5F3FF]/70 border border-[#CAE5FF]">
                  <div className="text-[10px] text-[#64748B]">BANDWIDTH</div>
                  <div className="font-bold text-[#00D9FF]">{feature.techDetails.bandwidth}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F1E8FF]/70 border border-[#E3D3FF]">
                  <div className="text-[10px] text-[#64748B]">LATENCY</div>
                  <div className="font-bold text-[#8855FF]">{feature.techDetails.latency}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFE5F1]/70 border border-[#FFCCE4]">
                  <div className="text-[10px] text-[#64748B]">INTERFACE</div>
                  <div className="font-bold text-[#FF4FA3]">{feature.techDetails.interfaceType}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#DDFBF0]/70 border border-[#B6F7DC]">
                  <div className="text-[10px] text-[#64748B]">COHERENCE</div>
                  <div className="font-bold text-[#059669]">{feature.techDetails.coherence}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Features list */}
          <div className="space-y-2 mb-6 bg-[#F8F4FF] p-4 rounded-2xl border border-[#E3D3FF]">
            <div className="text-xs font-mono font-bold text-[#8855FF] uppercase tracking-wider mb-2">
              Key Capabilities
            </div>
            {feature.specs.map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#202033] font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[#00D9FF]" />
                <span>{spec}</span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#F1E8FF]">
            <button
              onClick={() => {
                cyberAudio.playClick();
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-[#64748B] hover:text-[#202033]"
            >
              Close
            </button>
            <button
              onClick={() => {
                cyberAudio.playClick();
                onClose();
                onOpenWaitlist();
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00D9FF] via-[#8855FF] to-[#FF4FA3] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Early Prototype Access</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFocus, setSelectedFocus] = useState('Neural Synthesis');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    cyberAudio.playPowerUp();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00D9FF', '#8855FF', '#FF4FA3', '#4263FF'],
      });
    } catch {
      // fallback
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-[#202033]/30 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-[0_25px_70px_-15px_rgba(136,85,255,0.35)] border border-white p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#F1E8FF] mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D9FF] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#8855FF] uppercase">
                GENESIS ENROLLMENT // COHORT 01
              </span>
            </div>
            <button
              onClick={() => {
                cyberAudio.playClick();
                handleReset();
              }}
              className="w-8 h-8 rounded-full bg-[#F1E8FF] hover:bg-[#E3D3FF] flex items-center justify-center text-[#202033]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {submitted ? (
            /* Success confirmation */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#DDFBF0] border border-[#B6F7DC] flex items-center justify-center text-[#059669] mx-auto mb-4 shadow-sm animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-[#202033] mb-2">
                Synaptic Key Generated!
              </h3>
              <p className="text-sm text-[#64748B] mb-6 leading-relaxed max-w-sm mx-auto">
                Welcome to the next evolution, <span className="font-bold text-[#202033]">{name || 'Pioneer'}</span>. An invitation telemetry packet has been dispatched to <span className="font-bold text-[#8855FF]">{email}</span>.
              </p>
              <div className="p-3 bg-[#F1E8FF] rounded-2xl border border-[#E3D3FF] font-mono text-xs text-[#8855FF] mb-6">
                PASSKEY: CYB-{(Math.random() * 90000 + 10000).toFixed(0)}-SYNAPSE
              </div>
              <button
                onClick={() => {
                  cyberAudio.playClick();
                  handleReset();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#8855FF] text-white font-semibold text-sm shadow-md"
              >
                Return to Dashboard
              </button>
            </div>
          ) : (
            /* Enrollment Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-display font-extrabold text-2xl text-[#202033] mb-1">
                  Claim Your Genesis Pass
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Join researchers, creators, and engineers piloting the CYBORG//OS neural platform.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#202033] uppercase mb-1.5">
                  Full Name / Call-Sign
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Ada Lovelace"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E3D3FF] bg-[#F8F4FF]/50 text-sm focus:outline-none focus:border-[#8855FF] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#202033] uppercase mb-1.5">
                  Quantum / Email Endpoint
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@quantum-research.org"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E3D3FF] bg-[#F8F4FF]/50 text-sm focus:outline-none focus:border-[#8855FF] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#202033] uppercase mb-1.5">
                  Primary Research Vector
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Neural Synthesis', 'Robotics Aug', 'Quantum AI'].map((focus) => (
                    <button
                      type="button"
                      key={focus}
                      onClick={() => {
                        cyberAudio.playClick();
                        setSelectedFocus(focus);
                      }}
                      className={`py-2 px-1 rounded-xl text-xs font-mono transition-all text-center border ${
                        selectedFocus === focus
                          ? 'bg-[#F1E8FF] border-[#8855FF] text-[#8855FF] font-bold'
                          : 'bg-white border-[#E3D3FF] text-[#64748B] hover:text-[#202033]'
                      }`}
                    >
                      {focus}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  onMouseEnter={() => cyberAudio.playHover()}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00D9FF] via-[#8855FF] to-[#FF4FA3] text-white font-semibold text-sm shadow-[0_8px_25px_-5px_rgba(136,85,255,0.4)] hover:shadow-[0_12px_30px_-5px_rgba(255,79,163,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Initialize Early Access Key</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] font-mono text-center text-[#64748B] pt-1">
                Zero spam. Encrypted with 512-bit post-quantum bio-keys.
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
