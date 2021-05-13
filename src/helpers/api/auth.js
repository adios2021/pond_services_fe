import { Profiler } from 'react';
import request from './request';

const auth = {
  async login(formdata) {
    console.log('authjs', formdata);
    const response = await request.post('oauth/token', formdata);

    return response;
  },

  async profile() {
    const response = await request.get('profile');

    return response;
  }
}

export default auth;