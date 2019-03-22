const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  publicRuntimeConfig: {
    STITCH_APP_KEY: process.env.STITCH_APP_KEY
  }
});
