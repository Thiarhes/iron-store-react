import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://iron-store-node.herokuapp.com'
            // baseURL: 'http://localhost:5000'
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
            error => { return Promise.reject(error)}
        );

        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                localStorage.removeItem('token');
                throw error;
            }
        )
    };

    login = async (payload) => {
        const { email, password } = payload;
        try {
            const { data } = await this.api.post('/login', { email, password });
            const { token } = data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', data);
            
            return data.payload

        } catch (error) {
            throw error
        }
    };

    signup = async (payload) => {
        try {
            await this.api.post('/signup', payload);
        } catch (error) {
            console.log(error)
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
            const { data } = await this.api.get(`/cart/${id}`);
            return data;
        } catch (error) {
            throw error
        }
    }

    addToCart = async (payload) => {
        const { productId, userId } = payload;
        try {
            const {data} = await this.api.post(`/cart`, { productId, userId });
            return data;
        } catch (error) {
            throw error
        }
    }

    removeOneProduct = async (payload) => {
        const { productId, userId } = payload;
        try {
            await this.api.post(`/cart/removeProd`, {productId, userId});
        } catch (error) {
            throw error
        }
    }

    emptyCart = async (payload) => {
        const { userId } = payload;
        try {
            await this.api.put(`/cart`, { userId });
        } catch (error) {
            throw error
        }
    }

}

export default new Api();