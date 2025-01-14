import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [  
    plugin(
      function ({ addVariant}) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
    )
],
} satisfies Config;
