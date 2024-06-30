/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1d2036",
          "200": "#1d050d",
          "300": "#0a0204",
          "400": "rgba(76, 14, 34, 0)",
          "500": "rgba(0, 0, 0, 0.6)",
        },
        "tint-1": "#f7d5e0",
        white: "#fff",
        primary: "#84183a",
        "tint-0": "#fbeaef",
        "shades-3": "#430c1e",
        "shades-8": "#130408",
        "shades-4": "#390b19",
        "greyscale-2": "#ccc",
        "tint-3": "#efaac0",
        dimgray: "#6b3d4d",
        "tint-2": "#f3bfd0",
        "shades-0": "#5f122a",
        "shades-2": "#4c0e22",
        palevioletred: "#804254",
      },
      spacing: {},
      fontFamily: {
        "heading-4": "Satoshi",
        jost: "Jost",
      },
      borderRadius: {
        "12xs": "1px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      sm: "14px",
      lg: "18px",
      "21xl": "40px",
      "13xl": "32px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
