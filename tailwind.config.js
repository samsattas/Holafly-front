/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        112: "11.2rem",
        120: "12rem",
        128: "12.8rem",
        136: "13.6rem",
        144: "14.4rem",
        160: "16rem",
        192: "19.2rem",
        200: "20rem",
        208: "20.8rem",
        216: "21.6rem",
        224: "22.4rem",
        256: "25.6rem",
        288: "28.8rem",
        320: "32rem",
        360: "36rem",
        384: "38.4rem",
        400: "40rem",
        480: "48rem",
        512: "51.2rem",
        640: "64rem",
      },
      colors: ({ colors }) => ({
        primary: "#e6485c",
      }),
    },
  },
  plugins: [],
};
