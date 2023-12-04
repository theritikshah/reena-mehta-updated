const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#160020",
        primary_01: "#C25858",
      },
      fontFamily: {
        workSans: ["var(--font-work-sans)"],
        openSans: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
