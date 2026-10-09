import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Radio, Power, ShieldAlert, Sparkles, Orbit } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export const NeuralCore: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [coreMode, setCoreMode] = useState<'nominal' | 'overclock' | 'quantum'>('nominal');
  const [syncPercentage, setSyncPercentage] = useState(88.4);
  const [dataStream, setDataStream] = useState(4.2);
  const [stability, setStability] = useState(99.4);
  const [processingStatus, setProcessingStatus] = useState('STANDBY // CALIBRATED');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Toggle Activation
  const handleToggleActivation = () => {
    cyberAudio.playClick();
    if (!isActive) {
      cyberAudio.playCoreSurge();
      setIsActive(true);
      setCoreMode('overclock');
      setProcessingStatus('HYPER-OVERCLOCK // ACTIVE');
    } else {
      setIsActive(false);
      setCoreMode('nominal');
      setProcessingStatus('STANDBY // CALIBRATED');
    }
  };

  // Dynamic telemetry numbers
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive) {
      interval = setInterval(() => {
        setSyncPercentage((prev) => {
          const delta = (Math.random() - 0.45) * 0.15;
          return Math.min(100, Math.max(99.2, +(prev + delta).toFixed(2)));
        });
        setDataStream(() => {
          const base = coreMode === 'quantum' ? 24.8 : 18.4;
          const delta = (Math.random() - 0.5) * 0.8;
          return Math.max(12, +(base + delta).toFixed(1));
        });
        setStability((prev) => {
          const delta = (Math.random() - 0.5) * 0.1;
          return Math.min(100, Math.max(99.1, +(prev + delta).toFixed(2)));
        });
      }, 700);
    } else {
      setSyncPercentage(88.4);
      setDataStream(4.2);
      setStability(99.4);
    }
    return () => clearInterval(interval);
  }, [isActive, coreMode]);

  // Interactive 3D Canvas Particle Sphere & Orbital Rings
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes on a 3D sphere
    const particleCount = 120;
    interface Node3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      color: string;
      size: number;
    }

    const nodes: Node3D[] = [];
    const colors = ['#00D9FF', '#8855FF', '#FF4FA3', '#4263FF'];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.random() * Math.PI * 2;
      const radius = 130 + Math.random() * 20;

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        color: colors[i % colors.length],
        size: Math.random() * 2.5 + 1.5,
      });
    }

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const rotationSpeed = isActive ? 0.022 : 0.007;

      angleX += rotationSpeed * 0.7;
      angleY += rotationSpeed;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Render glowing orbital rings
      const ringCount = 3;
      for (let r = 0; r < ringCount; r++) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((angleY * (r + 1) * 0.4) + (r * Math.PI) / 3);
        ctx.beginPath();
        const rRadius = 160 + r * 28;
        ctx.ellipse(0, 0, rRadius, rRadius * 0.38, (r * Math.PI) / 4, 0, Math.PI * 2);
        ctx.lineWidth = isActive ? 2.5 : 1.5;
        ctx.strokeStyle = isActive
          ? r === 0
            ? 'rgba(0, 217, 255, 0.7)'
            : r === 1
            ? 'rgba(136, 85, 255, 0.7)'
            : 'rgba(255, 79, 163, 0.7)'
          : 'rgba(136, 85, 255, 0.2)';
        ctx.stroke();

        // Little satellite orb on ring
        const orbAngle = (angleY * (r + 1.5)) % (Math.PI * 2);
        const orbX = rRadius * Math.cos(orbAngle);
        const orbY = rRadius * 0.38 * Math.sin(orbAngle);
        ctx.beginPath();
        ctx.arc(orbX, orbY, isActive ? 5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = r === 0 ? '#00D9FF' : r === 1 ? '#8855FF' : '#FF4FA3';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = isActive ? 12 : 6;
        ctx.fill();
        ctx.restore();
      }

      // Projected node coordinates
      const projected = nodes.map((n) => {
        // Rotate around Y
        const x1 = n.baseX * cosY - n.baseZ * sinY;
        const z1 = n.baseX * sinY + n.baseZ * cosY;
        // Rotate around X
        const y2 = n.baseY * cosX - z1 * sinX;
        const z2 = n.baseY * sinX + z1 * cosX;

        // Perspective projection
        const fov = 350;
        const scale = fov / (fov + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;

        return { px, py, scale, z: z2, color: n.color, size: n.size };
      });

      // Sort by depth
      projected.sort((a, b) => b.z - a.z);

      // Draw connection lines between neighboring nodes
      const maxDist = isActive ? 60 : 45;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isActive ? 0.35 : 0.15);
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.strokeStyle = isActive ? 'rgba(136, 85, 255, ' + alpha + ')' : 'rgba(100, 116, 139, ' + alpha + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw core sphere glow
      const coreGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        isActive ? 140 : 100
      );
      if (isActive) {
        coreGrad.addColorStop(0, 'rgba(255, 79, 163, 0.45)');
        coreGrad.addColorStop(0.4, 'rgba(136, 85, 255, 0.35)');
        coreGrad.addColorStop(0.8, 'rgba(0, 217, 255, 0.2)');
        coreGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      } else {
        coreGrad.addColorStop(0, 'rgba(241, 232, 255, 0.6)');
        coreGrad.addColorStop(0.6, 'rgba(229, 243, 255, 0.3)');
        coreGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, isActive ? 140 : 100, 0, Math.PI * 2);
      ctx.fill();

      // Draw nodes
      projected.forEach((p) => {
        ctx.save();
        ctx.beginPath();
        const rad = Math.max(0.5, p.size * p.scale);
        ctx.arc(p.px, p.py, rad, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        if (isActive) {
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;
        }
        ctx.globalAlpha = Math.min(1, Math.max(0.2, (p.scale - 0.4) * 1.5));
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  return (
    <section id="neural-core" className="py-24 sm:py-32 bg-gradient-to-b from-white via-[#F1E8FF]/30 to-white relative overflow-hidden">
      {/* Decorative Pastel Ambient Orbs */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#FFE5F1] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] bg-[#E5F3FF] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#DDFBF0] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5F3FF] border border-[#CAE5FF] text-[#00D9FF] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm"
          >
            <Orbit className="w-3.5 h-3.5 text-[#4263FF]" />
            <span className="text-[#4263FF]">QUANTUM COMPUTE ENGINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#202033] tracking-tight mb-5"
          >
            POWERED BY THE <br />
            <span className="gradient-text">NEURAL CORE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed"
          >
            An autonomous biomimetic nexus capable of synchronizing billions of cognitive vectors in real time. Engage the core to unleash full quantum bandwidth.
          </motion.p>
        </div>

        {/* Centerpiece Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Center 3D Interactive Canvas */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[520px] rounded-[2.5rem] bg-white/70 backdrop-blur-2xl border border-white shadow-[0_20px_60px_-15px_rgba(136,85,255,0.15)] p-4 flex items-center justify-center overflow-hidden group">
              
              {/* Dynamic Aura when Active */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none rounded-[2.5rem] ${
                  isActive
                    ? 'opacity-100 bg-gradient-to-tr from-[#00D9FF]/20 via-[#8855FF]/20 to-[#FF4FA3]/20 shadow-[0_0_80px_rgba(136,85,255,0.3)_inset]'
                    : 'opacity-0'
                }`}
              />

              {/* Top HUD Tag inside Canvas frame */}
              <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#64748B] z-10 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-[#00D9FF] animate-ping' : 'bg-slate-400'}`} />
                  <span className="font-semibold text-[#202033]">
                    {isActive ? 'STATE: HYPER-ENGAGED' : 'STATE: DORMANT'}
                  </span>
                </div>
                <div className="bg-white/80 px-2.5 py-1 rounded-full border border-white shadow-2xs">
                  FREQ: {isActive ? '1.44 PHz' : '120 GHz'}
                </div>
              </div>

              {/* Canvas 3D Neural Sphere */}
              <canvas
                ref={canvasRef}
                className="w-full h-full cursor-grab active:cursor-grabbing"
              />

              {/* Bottom Canvas Mode Switchers */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E3D3FF] shadow-sm z-10">
                {(['nominal', 'overclock', 'quantum'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      cyberAudio.playClick();
                      setCoreMode(m);
                      if (!isActive) setIsActive(true);
                    }}
                    className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase transition-all ${
                      coreMode === m
                        ? 'bg-gradient-to-r from-[#00D9FF] to-[#8855FF] text-white shadow-xs'
                        : 'text-[#64748B] hover:text-[#202033]'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Interactive Button: "Activate Neural Core" */}
            <div className="mt-8 flex flex-col items-center">
              <button
                onClick={handleToggleActivation}
                onMouseEnter={() => cyberAudio.playHover()}
                className={`relative group px-9 py-4 rounded-full font-display font-extrabold text-base transition-all duration-300 transform active:scale-95 flex items-center gap-3 shadow-lg ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF4FA3] via-[#8855FF] to-[#00D9FF] text-white shadow-[0_12px_40px_-5px_rgba(255,79,163,0.5)] hover:shadow-[0_16px_50px_-5px_rgba(0,217,255,0.6)]'
                    : 'bg-white hover:bg-[#F1E8FF]/80 text-[#202033] border border-[#E3D3FF] shadow-[0_10px_30px_-5px_rgba(136,85,255,0.2)] hover:border-[#8855FF]'
                }`}
              >
                <Power className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-180 text-white animate-spin-slow' : 'text-[#8855FF]'}`} />
                <span>{isActive ? 'Deactivate Neural Core' : 'Activate Neural Core'}</span>
                {isActive && <Sparkles className="w-4 h-4 text-[#DDFBF0] animate-pulse" />}
              </button>
              <span className="text-xs font-mono text-[#64748B] mt-2.5">
                Click to toggle real-time neural frequency & telemetry
              </span>
            </div>
          </div>

          {/* Right Column: System Information Panel */}
          <div className="lg:col-span-5 space-y-5">
            {/* Main Panel Box */}
            <div className="rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white p-6 sm:p-8 shadow-[0_15px_40px_-10px_rgba(136,85,255,0.12)]">
              
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#F1E8FF] mb-6">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-[#202033]">
                    System Telemetry Panel
                  </h3>
                  <span className="text-xs font-mono text-[#64748B]">
                    NODE #NC-9801 // QUANTUM BUS
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${isActive ? 'bg-[#00D9FF] animate-pulse' : 'bg-amber-400'}`} />
                  <span className="text-xs font-mono font-bold text-[#202033]">
                    {isActive ? 'ONLINE' : 'IDLE'}
                  </span>
                </div>
              </div>

              {/* Telemetry Metric 1: Neural Synchronization */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#202033]">
                    <Activity className="w-4 h-4 text-[#8855FF]" />
                    <span>Neural Synchronization</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-[#8855FF]">
                    {syncPercentage}%
                  </span>
                </div>
                <div className="w-full h-3 bg-[#F1E8FF] rounded-full overflow-hidden p-0.5 border border-[#E3D3FF]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#00D9FF] via-[#8855FF] to-[#FF4FA3]"
                    animate={{ width: `${syncPercentage}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[#64748B] mt-1">
                  <span>Threshold: 85.0%</span>
                  <span>Target: 99.9%</span>
                </div>
              </div>

              {/* Telemetry Metric 2: Data Stream */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#202033]">
                    <Zap className="w-4 h-4 text-[#00D9FF]" />
                    <span>Data Stream Bandwidth</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-[#00D9FF]">
                    {dataStream} PB/s
                  </span>
                </div>
                <div className="w-full h-3 bg-[#E5F3FF] rounded-full overflow-hidden p-0.5 border border-[#CAE5FF]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#00D9FF] to-[#4263FF]"
                    animate={{ width: `${Math.min(100, (dataStream / 30) * 100)}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[#64748B] mt-1">
                  <span>Channel: Nanophotonic Ingress</span>
                  <span>Load: {isActive ? 'Heavy' : 'Standby'}</span>
                </div>
              </div>

              {/* Telemetry Metric 3: Processing Status */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#202033]">
                    <Cpu className="w-4 h-4 text-[#FF4FA3]" />
                    <span>Processing Status</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#FFE5F1]/60 border border-[#FFCCE4] flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#202033] tracking-wide">
                    {processingStatus}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white font-bold text-[#FF4FA3] shadow-2xs">
                    {isActive ? 'OPTIMAL' : 'READY'}
                  </span>
                </div>
              </div>

              {/* Telemetry Metric 4: Core Stability */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#202033]">
                    <ShieldAlert className="w-4 h-4 text-emerald-500" />
                    <span>Core Stability</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-emerald-600">
                    {stability}% COHERENT
                  </span>
                </div>
                <div className="w-full h-3 bg-[#DDFBF0] rounded-full overflow-hidden p-0.5 border border-[#B6F7DC]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-[#00D9FF]"
                    animate={{ width: `${stability}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[#64748B] mt-1">
                  <span>Fluctuation: &lt;0.02%</span>
                  <span>Cryo-Cooling: Sub-Kelvin</span>
                </div>
              </div>

            </div>

            {/* Secondary Translucent Status Card */}
            <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-[#E3D3FF] p-4 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00D9FF] to-[#8855FF] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Radio className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-[#202033]">
                  Distributed Node Sync Active
                </div>
                <div className="text-[11px] text-[#64748B] font-mono">
                  Autonomous self-healing cluster connected across 1,024 regional bio-gateways.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
