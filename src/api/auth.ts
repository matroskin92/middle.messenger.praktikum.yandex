import HTTPTransport from '../core/HTTPTransport';
import {LoginData, SignUpData} from './types';

class AuthAPI {
  private _request: HTTPTransport;

  constructor() {
    this._request = new HTTPTransport('auth');
  }

  login(data: LoginData) {
    return this._request.post('signin', {
      headers: {
        'Content-Type': 'application/json'
      },
      data,
    })
  }

  logout() {
    return this._request.post('logout', {
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }

  getUser() {
    return this._request.get('user', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
  }

  signUp(data: SignUpData) {
    return this._request.post('signup', {
      headers: {
        'Content-Type': 'application/json'
      },
      data,
    })
  }
}

export default new AuthAPI();