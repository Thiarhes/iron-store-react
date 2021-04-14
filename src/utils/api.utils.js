import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://iron-store-node.herokuapp.com'
        });
    }

    login = async (payload) => {
        console.log(payload)
        const { email, password } = payload;
        try {
            const { data } = await this.api.post('/login', { email, password });
            console.log(data)
            const { token } = data;
            localStorage.setItem('token', token);

        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }

}

export default new Api();