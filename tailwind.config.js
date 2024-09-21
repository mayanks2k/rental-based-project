/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    animation: {
      marquee: "marquee 8s linear infinite",
      marquee2: "marquee2 8s linear infinite",
      "slide-up": "slide-up 1s ease-out forwards",
      "slide-up-delay": "slide-up 1s ease-out 0.5s forwards",

      "slide-left": "slide-left 1s ease-out forwards",
      "slide-left-delay-1": "slide-left 0.7s ease-out 1s forwards",
      "slide-left-delay-2": "slide-left 0.7s ease-out 1.5s forwards",
      "slide-left-delay-3": "slide-left 0.7s ease-out 2s forwards",

      "slide-right": "slide-right 1s ease-out forwards",
      "slide-right-delay-1": "slide-right 0.7s ease-out 1s forwards",
      "slide-right-delay-2": "slide-right 0.7s ease-out 1.5s forwards",
      "slide-right-delay-3": "slide-right 0.7s ease-out 2s forwards",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
      "slide-up": {
        "0%": { transform: "translateY(100%)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
      "slide-left": {
        "0%": { transform: "translateX(20%)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
      "slide-right": {
        "0%": { transform: "translateX(-20%)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
    },
  },
  plugins: [],
};
