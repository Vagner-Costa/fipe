/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{},
    },
    spacing:{
      '0px':'0px',
      '1px':'1px',
      '2px':'2px',
      '3px':'3px',
      '4px':'4px',
      '5px':'5px',
      '7px':'7px',
      '8px':'8px',
      '10px':'10px',
      '15px':'15px',
      '20px':'20px',
      '25px':'25px',
      '30px':'30px',
      '35px':'35px',
      '40px':'40px',
      '45px':'45px',
      '50px':'50px',
      '60px':'60px',
      '70px':'70px',
      '80px':'80px',
      '90px':'90px',
      '100px':'100px',
    },
    fontSize:{
      '12px':'12px',
      '14px':'14px',
      '16px':'16px',
      '18px':'18px',
      '20px':'20px',
      '22px':'22px',
      '25px':'25px',
      '28px':'28px',
      '30px':'30px',
      '35px':'35px',
      '40px':'40px',
      '45px':'45px',
      '50px':'50px',
      '60px':'60px',
      '70px':'70px',
      '80px':'80px',
      '90px':'90px',
      '100px':'100px'
    },
    screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors:{
      'marrom_e':'#330000',
      'marrom_m':'#6b1615',
      'marrom_c':'#a42c2b',
      'branco': '#ffffff', 
      'preto':'#131313'
    },
    fontFamily:{
      'cabecalho': ['Anton', 'sans-serif']
    },

  },
  plugins: [],
}

