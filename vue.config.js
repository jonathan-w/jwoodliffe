module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Make scss variables and mixins globally available for .vue components
        data: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `,
      },
    },
  },
};
