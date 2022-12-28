const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://port-0-backend-20z52flc2u4w7q.gksl2.cloudtype.app/",
      changeOrigin: true,
    })
  );
};