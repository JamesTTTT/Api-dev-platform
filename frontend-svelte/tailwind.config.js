import daisyui from "daisyui";
export default {
  plugins: [daisyui],
  daisyui: {
    themes: ["nord"],
  },
  theme: {
    extend: {},
  },
  purge: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  variants: {
    extend: {},
  },
  darkmode: false,
};
