/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink_frame: "#e64282"
      },
      screens:{
        xl: "1300px",
        sd: "1140px"
      }
      // backgroundImage:{
      //   frame: "url('/src/app/assets/videoframe_6768.png')",
      // }
    },
  },
  plugins: [],
};
