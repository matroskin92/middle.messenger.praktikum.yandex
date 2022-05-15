import HTTPTransport from '../core/HTTPTransport'
import {UserSearch, UserPassword, UserProfile, UserAvatar} from './types';

export default class UserAPI {
  private _request: HTTPTransport;

  constructor() {
    this._request = new HTTPTransport('user');
  }

  searchUserByLogin(data: UserSearch) {
    return this._request.post('search', {
      includeCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
    });
  }

  changeUserProfile(data: UserProfile) {
    return this._request.put('profile', {
      includeCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
    });
  }

  changeUserAvatar(data: UserAvatar) {
    return this._request.put('profile/avatar', {
      includeCredentials: true,
      data,
    });
  }

  changeUserPassword(data: UserPassword) {
    return this._request.put('password', {
      includeCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
    });
  }

  getUserById(id: string) {
    return this._request.get(id, {
      includeCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
  }
}