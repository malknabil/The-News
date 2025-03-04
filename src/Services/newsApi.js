import axios from 'axios';

const API_KEY = 'f56acf1f297e4169a052d27496d8a861';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const getNews = async (params = {}) => {
    const cacheKey = `news-${params.category || 'general'}`;
    const cachedData = localStorage.getItem(cacheKey)

    if(cachedData){
        return JSON.parse(cachedData)
    }

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                ...params,        // هنا بنقول له خد الباراميتيرات اللي بعتها كلها
                apiKey: API_KEY,  // حط الـ API Key مع كل Request
            },
        });

        localStorage.setItem(cacheKey , JSON.stringify(response.data.articles))
        return response.data.articles;
    } catch (err) {
        console.log('Error:', err);
        return [];
    }
};
