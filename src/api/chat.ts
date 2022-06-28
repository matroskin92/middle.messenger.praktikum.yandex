import HTTPTransport from '@/core/HTTPTransport';
import {UsersData, AddChatData, RemoveChatData, ChatListData} from './types';

class ChatAPI {
  private _request: HTTPTransport;

  constructor() {
    this._request = new HTTPTransport('chats');
  }

  getToken(id: string | number) {
    return this._request.post(`token/${id}`);
  }

  addChat(data: AddChatData) {
    return this._request.post('', {
      data
    });
  }

  removeChat(data: RemoveChatData) {
    return this._request.delete('', {
      data
    });
  }

  getChatsList(data: ChatListData) {
    return this._request.get('', {
      data
    });
  }

  getChatUsers(id: string | number) {
    return this._request.get(`${id}/users`);
  }

  addUsers(data: UsersData) {
    return this._request.put('users', {
      data
    });
  }

  removeUsers(data: UsersData) {
    return this._request.delete('users', {
      data
    });
  }

}

export default new ChatAPI();