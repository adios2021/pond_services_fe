import request from './request';

const auth = {
    async login(email, password) {
        const response = await request.post('login', { email, password });

        return response;
    }
}

export default auth;