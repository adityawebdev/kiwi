module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backGroundImage: (theme) => ({
        "main-bg": "url('/img/icon.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
