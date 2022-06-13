import HTTPTransport from '../core/HTTPTransport';
import {ProfileData, PasswordData, SearchUserData} from './types';

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
      data: JSON.stringify(data)
    });
  }

  changePassword(data: PasswordData) {
    return this._request.put('password', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
    });
  }

  changeAvatar(data: FormData) {
    return this._request.put('profile/avatar', {
      data,
    });
  }

  searchUser(data: SearchUserData) {
    return this._request.post('search', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
    });
  }

}

export default new ProfileAPI();