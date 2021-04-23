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
        const { email, password } = payload;
        try {
            const { data } = await this.api.post('/login', { email, password });
            const { token } = data;
            localStorage.setItem('token', token);
            return data.payload

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

    getCart = async (id) => {
        try {
            const req = await this.api.get(`/${id}`);
            console.log(req)
            return req.data;
        } catch (error) {
            throw error
        }
    }

    addToCart = async (payload) => {
        const { productId, userId } = payload;
        try {
            const req = await this.api.post(`/cart`, { productId, userId });
            return req.data;
        } catch (error) {
            throw error
        }
    }

}

export default new Api();