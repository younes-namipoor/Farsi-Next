/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "480px",
      sm2: "600px",
      md: "768px",
      lg: "1024px",
      lg2: "1100px",
      xl: "1200px",
      xl2: "1440px",
    },
    fontFamily: {
      "iran-sans": "IranSans",
      "iran-sans-medium": "IranSansMedium",
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #0e1113, #101416, #111619, #13181b, #141a1e, #192025, #1d262b, #222c32, #2c383e, #36444b, #415159, #4c5e66)",
        "custom-gradient1":
          "linear-gradient(to left bottom, #111518, #0f171e, #0e1824, #0f192a, #12192f, #141c3d, #181d4a, #211e57, #272271, #2f258b, #3827a6, #4527c1)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-banner":
          "linear-gradient(90deg,#151515 0%,rgba(21,21,21,0) 10%)",
        "gradient-banner2":
          "linear-gradient(270deg,#151515 15%,rgba(21,21,21,0) 100%)",
        "gradient-banner3":
          "linear-gradient(180deg,#151515 4%,rgba(21,21,21,0) 45%)",
      },

      colors: {
        white: "#fff",
        black: "#000",
        "black-950": "#040404",
        "black-900": "#0d0d0d",
        "black-850": "#151515",
        "black-800": "#1a1a1a",
        "black-750": "#171717",
        "black-700": "#191919",
        "black-600": "#282828",
        "black-fade-600": "#282828b5",
        "black-500": "#1e1e1e",

        "gray-200": "#d8d8d8",
        "gray-250": "#b3b3b2",
        "gray-300": "#a1a1a1",
        "gray-350": "#4d4d4d",
        "gray-400": "#959ba2",
        "gray-500": "#606060",
        "gray-600": "#383838",
        "gray-700": "#3b3b3b",
        "gray-800": "#828282",

        "orange-300": "#fdc13b",
        "orange-400": "#f6b828",
        "orange-500": "#f89f3e",
        "orange-600": "#ff9800",
        "orange-700": "#f4843f",
        "orange-800": "#e1a928",

        "red-500": "#ff0000",

        "green-500": "#1cb561",
        "green-700": "#17924e",
        "green-800": "#123d25",
        "green-900": "#0d1912",

        "blue-800": "#123641",
        primary: "#1c1c22",
        accent: "#00ff99",

        hover: "#00e187",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
