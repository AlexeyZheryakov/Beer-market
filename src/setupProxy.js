const { createProxyMiddleware } = require('http-proxy-middleware');

const url = '/api';
module.exports = (app) => {
  app.use(
    url,
    createProxyMiddleware({
      target: process.env.REACT_APP_BEER_API_URL,
      changeOrigin: true,
      pathRewrite: {
        [`^${url}`]: '',
      },
    })
  );
};
