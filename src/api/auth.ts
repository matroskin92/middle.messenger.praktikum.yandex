import HTTPTransport from '@/core/HTTPTransport';
import {LoginData, SignUpData} from './types';

class AuthAPI {
  private _request: HTTPTransport;

  constructor() {
    this._request = new HTTPTransport('auth');
  }

  login(data: LoginData) {
    return this._request.post('signin', {
      data
    });
  }

  logout() {
    return this._request.post('logout');
  }

  getUser() {
    return this._request.get('user', {
      headers: {
        'Accept': 'application/json',
      },
    });
  }

  signUp(data: SignUpData) {
    return this._request.post('signup', {
      data
    });
  }
}

export default new AuthAPI();