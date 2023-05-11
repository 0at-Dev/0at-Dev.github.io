/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'desktop':'601px',
        'tablet':{ 'raw': '(min-width:768px) and (orientation:portrait)' }
      },
      colors:{
        'dark':'#111827',
        'light':'#FFFFFFB3'
      },
      fontFamily:{
        'inter':["Inter","sans-serif"],
        'nunito':["Nunito","sans-serif"],
      },
      backgroundImage:{
        'socialmedia-github':'url("../src/assets/logo-github.svg")',
        'socialmedia-linkedin':'url("../src/assets/logo-linkedin.svg")',
        'socialmedia-mail':'url("../src/assets/logo-mail.svg")',
        'goto-box':'url("../src/assets/goto.svg")',
        'scroll-arrow':'url("../src/assets/arrow.svg")',
        'main-pattern':'linear-gradient(45deg, #C06C84, #6C5B7B, #355C7D)'
      },
      boxShadow:{
        'outer':"-.1em .1em .4em #CECECE,.1em -.1em .2em white",
      },
      keyframes:{
        'fluid-gradient':{
          '0%':{'background-position': 'left'},
          '100%':{'background-position': 'right'}
        },
        fade: {
          '0%': { opacity:0,transform:'translateX(.2em)' },
          '50%': { opacity:0.2,transform:'translateX(.1em)' },
          '100%': { opacity:1,transform:'translateX(0em)' },
        },

      },
      animation:{
        'fluid-gradient':'fluid-gradient 5s infinite alternate',
        'fade':'fade 500ms linear forwards var(--delay)',
      
      }
    },
  },
  plugins: [],
}
