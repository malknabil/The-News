import axios from 'axios';

    const API_KEY = 'f56acf1f297e4169a052d27496d8a861';
    const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const getNews = async (params = {}) => {
    const cacheKey = `news-${params.category || 'general'}`;
    const cachedData = localStorage.getItem(cacheKey)

    if (cachedData && JSON.parse(cachedData).length > 0) {
        return JSON.parse(cachedData)
    }

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                ...params,
                apiKey: API_KEY,
            },
        });

        if (response.data.articles && response.data.articles.length > 0) {
            localStorage.setItem(cacheKey, JSON.stringify(response.data.articles));
            return response.data.articles;
        } else {
            console.log("No Articles Found");
            return [];
        }

    } catch (err) {
        console.log('Error:', err);
        return [];
    }
};

