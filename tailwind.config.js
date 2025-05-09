/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'synthwave': {
          'bg': '#0D0526',
          'pink': '#FF2496',
          'blue': '#42F5FF',
          'purple': '#BB40FF',
        },
        'pop-yellow': '#FFE600',
        'pop-red': '#FF4B3E',
        'pop-blue': '#7FDBFF',
        'pop-black': '#000000',
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 36, 150, 0.5)',
        'neon-blue': '0 0 20px rgba(66, 245, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(187, 64, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'glitch-1': {
          '0%, 100%': { transform: 'translate(-5px, 2px)', opacity: '0.7' },
          '50%': { transform: 'translate(5px, -2px)', opacity: '0.3' },
          '75%': { transform: 'translate(-2px, 1px)', opacity: '0.5' },
        },
        'glitch-2': {
          '0%, 100%': { transform: 'translate(5px, -2px)', opacity: '0.3' },
          '50%': { transform: 'translate(-5px, 2px)', opacity: '0.7' },
          '25%': { transform: 'translate(2px, -1px)', opacity: '0.5' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '33%': { opacity: '0.9' },
          '66%': { opacity: '0.95' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        'glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
      animation: {
        'glitch-1': 'glitch-1 3s infinite linear',
        'glitch-2': 'glitch-2 3s infinite linear',
        'flicker': 'flicker 0.5s infinite linear',
        'float': 'float 6s infinite ease-in-out',
        'glow': 'glow 2s infinite ease-in-out',
        'pulse': 'pulse 2s infinite ease-in-out',
        'scanline': 'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
} 