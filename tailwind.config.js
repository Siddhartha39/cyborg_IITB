/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        textMain: '#202033',
        textMuted: '#64748B',
        lavender: {
          light: '#F8F4FF',
          DEFAULT: '#F1E8FF',
          border: '#E3D3FF',
        },
        pastelBlue: {
          light: '#F2F8FF',
          DEFAULT: '#E5F3FF',
          border: '#CAE5FF',
        },
        pastelPink: {
          light: '#FFF2F8',
          DEFAULT: '#FFE5F1',
          border: '#FFCCE4',
        },
        mintGreen: {
          light: '#EDFCF6',
          DEFAULT: '#DDFBF0',
          border: '#B6F7DC',
        },
        electricCyan: {
          DEFAULT: '#00D9FF',
          glow: 'rgba(0, 217, 255, 0.4)',
        },
        vibrantPurple: {
          DEFAULT: '#8855FF',
          glow: 'rgba(136, 85, 255, 0.4)',
        },
        hotPink: {
          DEFAULT: '#FF4FA3',
          glow: 'rgba(255, 79, 163, 0.4)',
        },
        electricBlue: {
          DEFAULT: '#4263FF',
          glow: 'rgba(66, 99, 255, 0.4)',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'soft-glow': '0 10px 40px -10px rgba(136, 85, 255, 0.15)',
        'cyan-glow': '0 10px 30px -5px rgba(0, 217, 255, 0.3)',
        'pink-glow': '0 10px 30px -5px rgba(255, 79, 163, 0.3)',
        'purple-glow': '0 10px 30px -5px rgba(136, 85, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(136, 85, 255, 0.08)',
        'glass-hover': '0 16px 40px 0 rgba(136, 85, 255, 0.15)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spinReverse 25s linear infinite',
        'gradient-x': 'gradientX 6s ease infinite',
        'orbit-1': 'orbit1 12s linear infinite',
        'orbit-2': 'orbit2 18s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1.5deg)' },
        },
        spinReverse: {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        orbit1: {
          'from': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        orbit2: {
          'from': { transform: 'rotate(0deg) translateX(170px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(170px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}
