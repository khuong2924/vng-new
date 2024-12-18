/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss-motion');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}"
  ],

  safelist: [
    'motion-scale-in-[0.5]',
    'motion-translate-x-in-[-120%]',
    'motion-translate-y-in-[-60%]',
    'motion-opacity-in-[33%]',
    'motion-rotate-in-[-1080deg]',
    'motion-blur-in-[10px]',
    'motion-delay-[0.38s]/scale',
    'motion-duration-[0.38s]/opacity',
    'motion-duration-[1.20s]/rotate',
    'motion-duration-[0.15s]/blur',
    'motion-delay-[0.60s]/blur',
    'motion-ease-spring-bouncier',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInAndMove: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50%) translateY(20px) rotate(-20deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) translateY(0) rotate(0)',
          },
        },
      },
      animation: {
        fadeInAndMove: 'fadeInAndMove 0.8s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-motion'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
  ],
}
