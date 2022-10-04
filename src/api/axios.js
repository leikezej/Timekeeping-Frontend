import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:272/api/auth/'
});