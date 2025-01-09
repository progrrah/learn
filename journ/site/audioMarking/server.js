const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Включение CORS
app.use(cors());

// Основной маршрут прокси
app.get('/proxy', async (req, res) => {
    const targetUrl = req.query.url; // Целевой URL
    const path = req.query.path;    // Обязательный параметр `path`

    // Проверяем, указан ли целевой URL и путь
    if (!targetUrl || !path) {
        return res.status(400).json({ error: 'URL and path are required as query parameters' });
    }

    try {
        // Запрос к целевому URL
        const response = await axios.get(targetUrl, {
            headers: {
                Authorization: `OAuth y0__wgBEImhkZkDGO-hNCDqt_n9Ea0IKBgtCJAfxRzUIbosIgOc7-o6`, // Ваш токен
            },
            params: {
                path: path, // Добавление параметра `path` в запрос
            },
        });

        // Отправляем данные клиенту
        res.json(response.data);
    } catch (error) {
        console.error('Ошибка при запросе к Yandex API:', error.message);

        // Возвращаем сообщение об ошибке клиенту
        res.status(error.response?.status || 500).json({
            error: 'Failed to fetch data',
            details: error.response?.data || error.message,
        });
    }
});

// Глобальная обработка неизвестных маршрутов
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Deployed server: https://audiomarking.onrender.com/`);
});
