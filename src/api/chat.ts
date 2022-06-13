import HTTPTransport from '../core/HTTPTransport';
import {UsersData, AddChatData, RemoveChatData, ChatListData} from './types';

class ChatAPI {
  private _request: HTTPTransport;

  constructor() {
    this._request = new HTTPTransport('chats');
  }

  getToken(id: string | number) {
    return this._request.post(`token/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  addChat(data: AddChatData) {
    return this._request.post('', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
    });
  }

  removeChat(data: RemoveChatData) {
    return this._request.delete('', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
    });
  }

  getChatsList(data: ChatListData) {
    return this._request.get('', {
      headers: {
        'Content-Type': 'application/json'
      },
      data,
    });
  }

  getChatUsers(id: string | number) {
    return this._request.get(`${id}/users`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  addUsers(data: UsersData) {
    return this._request.put('users', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
    });
  }

  removeUsers(data: UsersData) {
    return this._request.delete('users', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
    });
  }

}

export default new ChatAPI();