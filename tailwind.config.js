module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(40%, 35%, 36%)",
          light: "hsla(40%, 35%, 36%, 15%)",
        },
        secondary: {
          DEFAULT: "hsl(40%, 12%, 30%)",
          ligth: "hsla(40%, 12%, 30%, 15%)",
        },
        facebookBlue: {
          DEFAULT: "hsl(208%, 91%, 35%)",
          ligth: "hsla(208%, 91%, 35%, 15%)",
        },
        white: {
          DEFAULT: "hsl(0%, 0%, 100%)",
          ligth: "hsl(40%, 13%, 91%)",
        },
        black: {
          DEFAULT: "hsl(0%, 0%, 0%)",
          ligth: "hsla(0%, 0%, 0%, 15%)",
        },
      },
      fontSize: {
        sm: "14px",
        base: "18px",
        lg: "24px",
        xl: "30px",
        "2xl": "50px",
      },
      fontFamily: {
        Limelight: ["Limelight", "sans-serif"],
        Poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
