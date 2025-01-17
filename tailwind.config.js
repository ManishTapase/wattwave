/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["40px", "50px"],
      "4xl": ["56px", "64px"],
      "6xl": ["64px", "80px"],
      "8xl": ["96px", "106px"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        // roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        // "custom-gradient": "linear-gradient(135deg, #054d5b, #3e8c85, #c8e3ab)",
        "custom-gradient1":
          "linear-gradient(135deg, rgba(8, 101, 126, 0.9), rgba(73, 176, 165, 0.8), rgba(240, 243, 189, 0.9))",
        "custom-gradient2": "linear-gradient(200deg,#c8e3ab,#29c8cb)",
        "custom-gradient3": "linear-gradient(200deg,lime,#c8e3ab,#29c8cb)",
      },
    },
  },
  plugins: [],
};
