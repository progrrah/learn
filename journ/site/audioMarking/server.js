const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Разрешить CORS для вашего приложения
app.use(cors());

// Настроить прокси для запросов к Yandex Disk API
app.use(
  '/proxy',
  createProxyMiddleware({
    target: 'https://cloud-api.yandex.net',
    changeOrigin: true,
    pathRewrite: {
      '^/proxy': '', // Удалить /proxy из пути
    },
    onProxyRes(proxyRes) {
      // Если нужно обработать ответ
      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    },
  })
);

// Запустить сервер
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
