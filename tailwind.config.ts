import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    textStrokeWidth: {
      '0.5': '0.5px'
    },
    extend: {
      boxShadow: {
        'vignette-md': '0 0 200px rgba(0,0,0,0.9) inset',
        'vignette-sm': '0 0 100px rgba(0,0,0,0.9) inset'
      },
      screens: {
        'max-sm': { max: '639px' } // Targets screens smaller than sm
      },
      animation: {
        "up-and-down": "up-and-down 1.5s ease-in-out infinite "
      },
      keyframes: {
        "up-and-down": {
          '0%, 100%': { transform: 'none' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      fontSize: {
        '2xs': ['10px', '16px']
      },
      fontFamily: {
        'Upheaval': 'Upheaval',
        'Tempesta': 'Tempesta',
        'Menu': 'IsaacGame'
      },
      backgroundImage: {
        'basement': "url('/images/floors/basement.png')",
        'basement-phone': "url('/images/floors/basement-phone.png')",
        'downpour': "url('/images/floors/downpour.png')",
        'error': "url('/images/floors/error.webp')",
        'isaac-crying-black-background-mobile': "url('/images/misc/isaac-crying-black-background-mobile.jpg')",
        'item-streak': "url('/images/ui/item-streak.png')",
        'basement-corner': "url('/images/floors/basement-corner.png')",
        'menu-house': "url('/images/ui/menu-house.png')",
        'menu-paper-1': "url('/images/ui/menu-paper-1.png')",
        'menu-paper-2': "url('/images/ui/menu-paper-2.png')",
        'menu-paper-3': "url('/images/ui/menu-paper-3.png')",
        'menu-paper-4': "url('/images/ui/menu-paper-4.png')",
        'menu-paper-5': "url('/images/ui/menu-paper-5.png')",
        'menu-paper-6': "url('/images/ui/menu-paper-6.png')",
        'menu-paper-7': "url('/images/ui/menu-paper-7.png')",
        'menu-paper-long': "url('/images/ui/todo.png')",
        'title-menu': "url('/images/ui/title-menu-bg.png')",
        'continue-progress': "url('/images/ui/continue-progress.png')",
        'main-menu': "url('/images/ui/main-menu.png')",
        'daily-challenge-main-menu': "url('/images/ui/daily-challenge-main-menu.png')",
        'menu-overlay': "url('/images/ui/menu-overlay.png')",
        'options-menu': "url('/images/ui/options-menu-paper.png')",
        'logo': "url('/images/ui/quick-lookup-logo.png')",
        'slider-0': "url('/images/ui/bg-slider-0.png')",
        'slider-1': "url('/images/ui/bg-slider-1.png')",
        'slider-2': "url('/images/ui/bg-slider-2.png')",
        'slider-3': "url('/images/ui/bg-slider-3.png')",
        'slider-4': "url('/images/ui/bg-slider-4.png')",
        'slider-5': "url('/images/ui/bg-slider-5.png')",
        'slider-6': "url('/images/ui/bg-slider-6.png')",
        'slider-7': "url('/images/ui/bg-slider-7.png')",
        'slider-8': "url('/images/ui/bg-slider-8.png')",
        'slider-9': "url('/images/ui/bg-slider-9.png')",
        'slider-10': "url('/images/ui/bg-slider-10.png')",
        'dice-room-1': "url('/images/floors/dice-room-1.png')",
        'dice-room-2': "url('/images/floors/dice-room-2.png')",
        'dice-room-3': "url('/images/floors/dice-room-3.png')",
        'dice-room-4': "url('/images/floors/dice-room-4.png')",
        'dice-room-5': "url('/images/floors/dice-room-5.png')",
        'dice-room-6': "url('/images/floors/dice-room-6.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "ui": "#372b2d",
        "main-menu-color": "#ccbebb"
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke")
  ],
} satisfies Config;
