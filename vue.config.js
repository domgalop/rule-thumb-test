module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/styles/settings/colors.scss";
          @import "./src/styles/settings/breakpoints";
        `,
      },
    },
  },
};
