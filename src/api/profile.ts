import HTTPTransport from '../core/HTTPTransport';
import {ProfileData, PasswordData} from './types';

class ProfileAPI {
  private _request: HTTPTransport;

  constructor() {
    this._request = new HTTPTransport('user');
  }

  changeProfile(data: ProfileData) {
    return this._request.put('profile', {
      headers: {
        'Content-Type': 'application/json'
      },
      data,
    });
  }

  changePassword(data: PasswordData) {
    return this._request.put('password', {
      headers: {
        'Content-Type': 'application/json'
      },
      data,
    });
  }

  changeAvatar(data: FormData) {
    return this._request.put('profile/avatar', {
      data,
    });
  }

}

export default new ProfileAPI();