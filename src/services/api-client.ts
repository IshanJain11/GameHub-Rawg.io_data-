import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '01eb1ecba6bc400c8b582bd1503ac328'
    }
})