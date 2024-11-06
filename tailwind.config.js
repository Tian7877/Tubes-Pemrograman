/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "organogram-cards-profile": [
          "2px 3px 5px rgba(0, 0, 0, 0.32)",
          "0px 0px 8px rgba(131, 0, 170, 0.38)",
          "0px 0px 23px rgba(255, 255, 255, 0.40)",
        ],
        "vision-mission-carousel": [
          "-4px 0px 10px rgba(131, 0, 170, 1)",
          "0px 0px 10px rgba(131, 0, 170, 1)",
        ],
      },
      keyframes: {
        blink: {
          "0%": { opacity: "1" },
          "10%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%, 60%": { filter: "brightness(100%)" },
          "30%": { filter: "brightness(150%)" },
        },
        flicker: {
          "0%, 40%, 60%": { filter: "brightness(100%)" },
          "30%,50%,70%": { filter: "brightness(150%)" },
        },
      },
      gradientColorStops: {
        "hero-shade-start": "rgba(149, 229, 255, 0.60)",
        "hero-shade-end": "rgba(82, 35, 119, 0.00)",
      },
      animation: {
        blink: "blink 0.5s ease-in-out",
        glow: "glow 3s ease-in-out infinite",
        flicker: "flicker 3s none infinite",
      },
      screens: {
        vsm: "380px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        "montserrat-alternates": ["var(--font-montserrat-alternates)"],
        "work-sans": ["var(--font-work-sans)"],
      },
      colors: {
        "primary-1-dark-blue": "#001848",
        "primary-2-very-dark-purple": "#260D3A",
        "primary-3-dark-purple": "#4F0069",
        "secondary-1-purple": "#A164A9",
        "secondary-2-pink": "#F9BED4",
        "secondary-3-pastel-purple": "#A9B5FF",
        "secondary-4-blue": "#6196FE",
        "accent-1-orange": "#F6C57E",
        "accent-2-yellow": "#FFD542",
        "accent-3-pink": "#FC798D",
        "error-red": "#BD1B1B",
        "link-blue": "#060B81",
        "warning-orange": "#FFC806",
        "success-green": "#1B8E27",
        "text-black": "#1B1A1D",
      },
      keyframes: {
        glow: {
          "0%, 60%": { filter: "brightness(100%)" },
          "30%": { filter: "brightness(150%)" },
        },
        glow2: {
          "0%, 100%": { filter: "brightness(125%)" },
          "50%": { filter: "brightness(140%)" },
        },
        flicker: {
          "0%, 40%, 60%": { filter: "brightness(100%)" },
          "30%,50%,70%": { filter: "brightness(150%)" },
        },
        gridIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        heroShadeIn1: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0,5" },
        },
        heroShadeIn2: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0,75" },
        },
        heroShadeIn3: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        // Animasi Text IEEE
        IEEEText1Def: {
          "50%": { top: "calc(100vw * 311.41 * 2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 321.41 * 2 / 1440)" },
        },
        IEEEText1sm: {
          "50%": { top: "calc(100vw * 311.41 * 1.5 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 321.41 * 1.5 / 1440)" },
        },
        IEEEText1md: {
          "50%": { top: "calc(100vw * 311.41 * 1.2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 321.41 * 1.2 / 1440)" },
        },
        IEEEText1lg: {
          "50%": { top: "calc(100vw * 311.41 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 321.41 / 1440)" },
        },

        IEEEText2Def: {
          "50%": { top: "calc(100vw * 255.31 * 2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 265.31 * 2 / 1440)" },
        },
        IEEEText2sm: {
          "50%": { top: "calc(100vw * 255.31 * 1.5 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 265.31 * 1.5 / 1440)" },
        },
        IEEEText2md: {
          "50%": { top: "calc(100vw * 255.31 * 1.2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 265.31 * 1.2 / 1440)" },
        },
        IEEEText2lg: {
          "50%": { top: "calc(100vw * 255.31 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 265.31 / 1440)" },
        },

        IEEEText3Def: {
          "50%": { top: "calc(100vw * 296.09 * 2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 306.09 * 2 / 1440)" },
        },
        IEEEText2sm: {
          "50%": { top: "calc(100vw * 296.09 * 1.5 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 306.09 * 1.5 / 1440)" },
        },
        IEEEText3md: {
          "50%": { top: "calc(100vw * 296.09 * 1.2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 306.09 * 1.2 / 1440)" },
        },
        IEEEText3lg: {
          "50%": { top: "calc(100vw * 296.09 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 306.09 / 1440)" },
        },

        IEEEText4Def: {
          "50%": { top: "calc(100vw * 243 * 2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 253 * 2 / 1440)" },
        },
        IEEEText4sm: {
          "50%": { top: "calc(100vw * 243 * 1.5 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 253 * 1.5 / 1440)" },
        },
        IEEEText4md: {
          "50%": { top: "calc(100vw * 243 * 1.2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 253 * 1.2 / 1440)" },
        },
        IEEEText4lg: {
          "50%": { top: "calc(100vw * 243 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 253 / 1440)" },
        },

        // Carousel Animation

        //Card0

        Card0Next: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0" },
        },

        Card0Back: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        //Card1

        Card1Next: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },

        Card1Back: {
          "0%": {
            transform: "scale(0.75)",
            zIndex: "1",
            left: "128px",
            filter: "blur(3px)",
          },
          "100%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "390px",
            filter: "blur(1.5px)",
          },
        },

        Card1BackM: {
          "0%": {
            transform: "scale(0.75)",
            zIndex: "1",
            left: "128px",
            filter: "blur(3px)",
          },
          "100%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "290px",
            filter: "blur(1.5px)",
          },
        },

        //Card2

        Card2Next: {
          "0%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "40px",
            filter: "blur(1.5px)",
          },
          "100%": {
            transform: "scale(0.75)",
            zIndex: "1",
            left: "-222px",
            filter: "blur(3px)",
          },
        },

        Card2Back: {
          "0%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "40px",
            filter: "blur(1.5px)",
          },
          "100%": {
            transform: "scale(1)",
            zIndex: "3",
            left: "350px",
            filter: "blur(0px)",
          },
        },

        Card2NextM: {
          "0%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "40px",
            filter: "blur(1.5px)",
          },
          "100%": {
            transform: "scale(0.75)",
            zIndex: "1",
            left: "-122px",
            filter: "blur(3px)",
          },
        },

        Card2BackM: {
          "0%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "40px",
            filter: "blur(1.5px)",
          },
          "100%": {
            transform: "scale(1)",
            zIndex: "3",
            left: "250px",
            filter: "blur(0px)",
          },
        },

        //Card3
        Card3Next: {
          "0%": {
            transform: "scale(1)",
            zIndex: "3",
            left: "0px",
            filter: "blur(0px)",
          },
          "100%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "-310px",
            filter: "blur(1.5px)",
          },
        },

        Card3Back: {
          "0%": {
            transform: "scale(1)",
            zIndex: "3",
            left: "0px",
            filter: "blur(0px)",
          },
          "100%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "310px",
            filter: "blur(1.5px)",
          },
        },

        Card3NextM: {
          "0%": {
            transform: "scale(1)",
            zIndex: "3",
            left: "0px",
            filter: "blur(0px)",
          },
          "100%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "-210px",
            filter: "blur(1.5px)",
          },
        },

        Card3BackM: {
          "0%": {
            transform: "scale(1)",
            zIndex: "3",
            left: "0px",
            filter: "blur(0px)",
          },
          "100%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "210px",
            filter: "blur(1.5px)",
          },
        },
        //Card4
        Card4Next: {
          "0%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "-40px",
            filter: "blur(1.5px)",
          },
          "100%": {
            transform: "scale(1)",
            zIndex: "3",
            left: "-350px",
            filter: "blur(0px)",
          },
        },

        Card4Back: {
          "0%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "-40px",
            filter: "blur(1.5px)",
          },

          "100%": {
            transform: "scale(0.75)",
            zIndex: "1",
            left: "222px",
            filter: "blur(3px)",
          },
        },

        Card4NextM: {
          "0%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "-40px",
            filter: "blur(1.5px)",
          },
          "100%": {
            transform: "scale(1)",
            zIndex: "3",
            left: "-250px",
            filter: "blur(0px)",
          },
        },

        Card4BackM: {
          "0%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "-40px",
            filter: "blur(1.5px)",
          },
          "100%": {
            transform: "scale(0.75)",
            zIndex: "1",
            left: "122px",
            filter: "blur(3px)",
          },
        },
        //Card5
        Card5Next: {
          "0%": {
            transform: "scale(0.75)",
            zIndex: "1",
            left: "-128px",
            filter: "blur(3px)",
          },
          "100%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "-390px",
            filter: "blur(1.5px)",
          },
        },

        Card5Back: {
          "0%": { opacity: "1", zIndex: "1" },
          "100%": { opacity: "0", zIndex: "0" },
        },

        Card5NextM: {
          "0%": {
            transform: "scale(0.75)",
            zIndex: "1",
            left: "-128px",
            filter: "blur(3px)",
          },
          "100%": {
            transform: "scale(0.9)",
            zIndex: "2",
            left: "-290px",
            filter: "blur(1.5px)",
          },
        },

        //Card6
        Card6Next: {
          "0%": { opacity: "0", zIndex: "0" },
          "100%": { opacity: "1", zIndex: "1" },
        },

        Card6Back: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0" },
        },

        // Switch Event Animation
        toPast: {
          "0%": { left: "0px" },
          "100%": { left: "50%" },
        },
        toUpcoming: {
          "0%": { left: "50%" },
          "100%": { left: "0px" },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
        glow2: "glow2 4s ease-in-out infinite",
        flicker: "flicker 2s none infinite",
        gridIn: "gridIn 2s ease-in-out",
        heroShadeIn1: "heroShadeIn1 2s ease-in",
        heroShadeIn2: "heroShadeIn2 2s ease-in",
        heroShadeIn3: "heroShadeIn3 2s ease-in",

        IEEEText1Def: "IEEEText1Def 2s ease-in infinite",
        IEEEText1sm: "IEEEText1sm 2s ease-in infinite",
        IEEEText1md: "IEEEText1md 2s ease-in infinite",
        IEEEText1lg: "IEEEText1lg 2s ease-in infinite",

        IEEEText2Def: "IEEEText2Def 2s ease-in infinite",
        IEEEText2sm: "IEEEText2sm 2s ease-in infinite",
        IEEEText2md: "IEEEText2md 2s ease-in infinite",
        IEEEText2lg: "IEEEText2lg 2s ease-in infinite",

        IEEEText3Def: "IEEEText3Def 2s ease-in infinite",
        IEEEText3sm: "IEEEText2sm 2s ease-in infinite",
        IEEEText3md: "IEEEText3md 2s ease-in infinite",
        IEEEText3lg: "IEEEText3lg 2s ease-in infinite",

        IEEEText4Def: "IEEEText4Def 2s ease-in infinite",
        IEEEText4sm: "IEEEText4sm 2s ease-in infinite",
        IEEEText4md: "IEEEText4md 2s ease-in infinite",
        IEEEText4lg: "IEEEText4lg 2s ease-in infinite",

        // Carousel Animation
        Card0Next: "Card0Next 0.5s ease-in-out",
        Card0Back: "Card0Back 0.5s ease-in-out",

        Card1Next: "Card1Next 0.5s ease-in-out",
        Card1Back: "Card1Back 0.5s ease-in-out",
        Card1BackM: "Card1BackM 0.5s ease-in-out",

        Card2Next: "Card2Next 0.5s ease-in-out",
        Card2Back: "Card2Back 0.5s ease-in-out",
        Card2NextM: "Card2NextM 0.5s ease-in-out",
        Card2BackM: "Card2BackM 0.5s ease-in-out",

        Card3Next: "Card3Next 0.5s ease-in-out",
        Card3Back: "Card3Back 0.5s ease-in-out",
        Card3NextM: "Card3NextM 0.5s ease-in-out",
        Card3BackM: "Card3BackM 0.5s ease-in-out",

        Card4Next: "Card4Next 0.5s ease-in-out",
        Card4Back: "Card4Back 0.5s ease-in-out",
        Card4NextM: "Card4NextM 0.5s ease-in-out",
        Card4BackM: "Card4BackM 0.5s ease-in-out",

        Card5Next: "Card5Next 0.5s ease-in-out",
        Card5Back: "Card5Back 0.5s ease-in-out",
        Card5NextM: "Card5NextM 0.5s ease-in-out",

        Card6Next: "Card6Next 0.5s ease-in-out",
        Card6Back: "Card6Back 0.5s ease-in-out",

        // Switch Animation
        toPast: "toPast 0.2s ease-in-out",
        toUpcoming: "toUpcoming 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
