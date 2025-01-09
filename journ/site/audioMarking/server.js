const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// Прокси для запросов к Yandex Disk API
app.get("/proxy", async (req, res) => {
    const { url } = req.query; // Получаем URL Yandex Disk из параметра

    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `OAuth YOUR_YANDEX_OAUTH_TOKEN`, // Замените на ваш токен
            },
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Ошибка при запросе к Yandex Disk:", error.message);
        res.status(error.response?.status || 500).json({
            error: error.response?.data || "Server Error",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
