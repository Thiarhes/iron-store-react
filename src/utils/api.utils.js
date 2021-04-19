import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://iron-store-node.herokuapp.com'
        });

        this.api.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers = {
                        Authorization: `Bearer ${token}`
                    };
                };
                return config;
            },
            error => console.error(error)
        );

        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                localStorage.removeItem('token');
            }
        )
    };

    login = async (payload) => {
        console.log(payload)
        const { email, password } = payload;
        try {
            const { data } = await this.api.post('/login', { email, password });
            console.log(data)
            const { token } = data;
            localStorage.setItem('token', token);

        } catch (error) {
            throw error
        }
    };

    signup = async (payload) => {
        try {
            await this.api.post('/signup', payload);
        } catch (error) {
            throw error
        }
    };

    getAllProducts = async () => {
        try {
            const { data } = await this.api.get('/products');
            return data;
        } catch (error) {
            throw error
        }
    }

    getOneProduct = async (id) => {
        try {
            const { data } = await this.api.get(`/products/${id}`);
            return data;
        } catch (error) {
            throw error
        }
    }

}

export default new Api();