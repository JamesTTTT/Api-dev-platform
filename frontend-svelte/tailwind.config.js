import daisyui from "daisyui";
export default {
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00a9ff",

          secondary: "#006fa8",

          accent: "#00c5e4",

          neutral: "#19232a",

          base: "#ffffff",

          info: "#006dff",

          success: "#00ed9e",

          warning: "#ffaf28",

          error: "#f14256",
        },
      },
    ],
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
