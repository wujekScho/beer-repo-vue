import axios from 'axios'

const api = axios.create({
    baseURL: `http://www.schodzinski.pl:8080/api`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(function (config) {
    let token = localStorage.getItem('access_token');
    console.log(token);
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default api