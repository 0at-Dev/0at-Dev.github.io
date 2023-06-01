/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'desktop':'601px',
        'tablet':{ 'raw': '(min-width:768px) and (orientation:portrait)' }
      },
      colors:{
        // 'dark':'#111827',
        // 'light':'#FFFFFFB3'
        'dark':'#5e5e63',
        'darkest':'#1e1e22',
        'semilight':'#eceff1',
        'light':'#FFFFFFB3',
        'lightest':'#f6f6f6',
      },
      fontFamily:{
        'inter':["Inter","sans-serif"],
        'nunito':["Nunito","sans-serif"],
      },
      backgroundImage:{
        'socialmedia-github':'url("../logo-github.svg")',
        'socialmedia-github-light':'url("../logo-github-light.svg")',
        'socialmedia-linkedin':'url("../logo-linkedin.svg")',
        'socialmedia-linkedin-light':'url("../logo-linkedin-light.svg")',
        'socialmedia-mail':'url("../logo-mail.svg")',
        'socialmedia-mail-light':'url("../logo-mail-light.svg")',
        'goto-box':'url("../goto.svg")',
        'scroll-arrow':'url("../arrow.svg")',
        'main-pattern':'linear-gradient(45deg, #C06C84, #6C5B7B, #355C7D)',
        'rainbow-text-gradient':'linear-gradient(141deg,#E1EEF4,#28abe1 15%,#ff729f 50%,#f18f01 85%)',
        'dark-text-gradient':'linear-gradient(141deg, #969699, #1e1e22)',
      },
      boxShadow:{
        'outer':"-.1em .1em .4em #CECECE,.1em -.1em .2em white",
      },
      keyframes:{
        'fluid-gradient':{
          '0%':{'background-position': 'left'},
          '100%':{'background-position': 'right'}
        },
        'img-appear':{
          '0%':{opacity:0},
          '100%':{opacity:1}
        },
        'rev-img':{
          '0%':{
            'left': '0%',
            'width': '0%'
          },
          '50%': {
            'left':'0%',
            'width':'100%'
          },
          '100%':{
            'left':'100%',
            'width':'0%'
          }

        },
        'fade': {
          '0%': { opacity:0,transform:'translateX(.2em)' },
          '50%': { opacity:0.2,transform:'translateX(.1em)' },
          '100%': { opacity:1,transform:'translateX(0em)' },
        },

      },
      animation:{
        'fluid-gradient':'fluid-gradient 5s infinite alternate',
        'fade':'fade 500ms linear forwards var(--delay)',
        'img-appear':'img-appear 1s linear forwards 2.4s',
        'rev-img':'rev-img 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards 2s'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        }
      }
      addUtilities(newUtilities)
    })
  ],
}

