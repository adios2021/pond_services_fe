import request from './request';

const auth = {
  async login(formdata) {
    console.log('authjs', formdata);
    const response = await request.post('oauth/token', formdata);

    return response;
  }
}

export default auth;