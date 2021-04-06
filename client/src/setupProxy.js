const createProxyMiddleware = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/api"], { target: "https://young-woodland-14078.herokuapp.com/",
    changeOrigin: true,
    })
  );
};