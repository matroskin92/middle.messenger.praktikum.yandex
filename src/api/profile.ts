import HTTPTransport from '@/core/HTTPTransport';
import {ProfileData, PasswordData, SearchUserData} from './types';

class ProfileAPI {
  private _request: HTTPTransport;

  constructor() {
    this._request = new HTTPTransport('user');
  }

  changeProfile(data: ProfileData) {
    return this._request.put('profile', {
      data
    });
  }

  changePassword(data: PasswordData) {
    return this._request.put('password', {
      data
    });
  }

  changeAvatar(data: FormData) {
    return this._request.put('profile/avatar', {
      data,
    });
  }

  searchUser(data: SearchUserData) {
    return this._request.post('search', {
      data
    });
  }

}

export default new ProfileAPI();