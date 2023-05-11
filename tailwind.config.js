/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        caveat: ['Caveat']
      },
      backgroundImage: {
        'lines': 'url("/public/lines.svg")'
      },
      opacity: {
        '99': '0.99'
      },
      keyframes: {
        wave: {
          '0%': {
            transform: 'rotate(0.0deg)'
          },
          '10%': { 
            transform: 'rotate(14deg)' 
          },
          '20%': { 
            transform: 'rotate(-8deg)' 
          },
          '30%': { 
            transform: 'rotate(14deg)' 
          },
          '40%': { 
            transform: 'rotate(-4deg)' 
          },
          '50%': { 
            transform: 'rotate(10.0deg)' 
          },
          '60%': { 
            transform: 'rotate(0.0deg)' 
          },
          '100%': { 
            transform: 'rotate(0.0deg)' 
          }
        },
        slide_down: {
          '0%': {
            transform: 'translateY(-100%)'
          },
          '100%': {
            transform: 'translateY(0%)'
          }
        },
        slide_down2: {
          '0%': {
            transform: 'translateY(-50%)'
          },
          '100%': {
            transform: 'translateY(0%)'
          }
        },
        slide_up2: {
          '0%': {
            transform: 'translateY(50%)'
          },
          '100%': {
            transform: 'translateY(0%)'
          }
        },
        blob1: {
          '0%,100%': {
            borderRadius: '75% 25% 59% 41% / 55% 75% 25% 45%'
          },
          '20%': {
            borderRadius: '23% 77% 25% 75% / 73% 46% 54% 27%'
          },
          '40%': {
            borderRadius: '39% 61% 70% 30% / 54% 54% 46% 46%'
          },
          '60%': {
            borderRadius: '23% 77% 25% 75% / 73% 46% 54% 27%'
          },
          '80%': {
            borderRadius: '16% 84% 26% 74% / 59% 43% 57% 41%'
          }
        },
        blob2: {
          '0%,100%': {
            borderRadius: '16% 84% 26% 74% / 59% 43% 57% 41%'
          },
          '20%': {
            borderRadius: '39% 61% 70% 30% / 54% 54% 46% 46%'
          },
          '40%': {
            borderRadius: '23% 77% 25% 75% / 73% 46% 54% 27%'
          },
          '60%': {
            borderRadius: '75% 25% 59% 41% / 55% 75% 25% 45%'
          },
          '80%': {
            borderRadius: '23% 77% 25% 75% / 73% 46% 54% 27%'
          }
        },
        blob3: {
          '0%,100%': {
            borderRadius: '23% 77% 25% 75% / 73% 46% 54% 27%'
          },
          '20%': {
            borderRadius: '16% 84% 26% 74% / 59% 43% 57% 41%'
          },
          '40%': {
            borderRadius: '23% 77% 25% 75% / 73% 46% 54% 27%'
          },
          '60%': {
            borderRadius: '39% 61% 70% 30% / 54% 54% 46% 46%'
          },
          '80%': {
            borderRadius: '75% 25% 59% 41% / 55% 75% 25% 45%'
          }
        }
      },
      animation: {
        wave: 'wave 3s linear infinite',
        slide_down2: 'slide_down2 .2s',
        slide_up2: 'slide_up2 .2s',
        slide_down400: 'slide_down .4s',
        slide_down600: 'slide_down .6s',
        slide_down800: 'slide_down .8s',
        slide_down1000: 'slide_down 1s',
        blob1: 'blob1 10s infinite',
        blob2: 'blob2 10s infinite',
        blob3: 'blob3 10s infinite'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin')
  ]
}

