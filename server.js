import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Configure the proxy middleware
app.use(
  '/api', // The path you want to proxy (e.g., /api)
  createProxyMiddleware({
    target: 'https://gateway.marvel.com:443',/*'https://superheroapi.com:443',*/ // The target URL of the external API
    changeOrigin: true, // Needed for virtual hosted sites
    pathRewrite: {
      '^/api': '', // Remove the /api prefix when forwarding the request
    },
  })
);

// Start the server
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});