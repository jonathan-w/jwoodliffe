module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixin.scss";
        `,
      },
    },
  },
};
