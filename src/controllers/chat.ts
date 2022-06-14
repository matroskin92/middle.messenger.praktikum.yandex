import ChatAPI from '../api/chat';
import { UserDTO } from '../api/types';
import { transformUser, apiHasError } from '../utils';

class ChatController {
  private static instanse: ChatController;

  constructor() {
    if (ChatController.instanse) {
      return ChatController.instanse;
    }

    ChatController.instanse = this;
  }

  public async getToken(chatId: number | string) {
    try {
      const response = await ChatAPI.getToken(chatId);
      if (response.status === 200) {
        const resParsed = JSON.parse(response.response);
        if (apiHasError(resParsed)) return;

        return resParsed.token;
      }
    } catch (e) {
      console.log('catch', e);
    }
  }

  public async getChatsList(search: string | null = null) {
    try {
      const response = await ChatAPI.getChatsList({ title: search ?? '' });
      if (response.status === 200) {
        const resParsed = JSON.parse(response.response);
        if (apiHasError(resParsed)) return;

        return resParsed;
      }
    } catch (e) {
      console.log('catch', e);
    }
  }

  public async getChatUsers(id: string) {
    try {
      const response = await ChatAPI.getChatUsers(id);
      if (response.status === 200) {
        const resParsed = JSON.parse(response.response);
        if (apiHasError(resParsed)) return;

        return resParsed.map((user: any) => transformUser(user as UserDTO));
      }
    } catch (e) {
      console.log('catch', e);
    }
  }

  public async addChat(title: string) {
    try {
      const response = await ChatAPI.addChat({ title });
      if (response.status === 200) {
        const resParsed = JSON.parse(response.response);
        if (apiHasError(resParsed)) return;

        window.store.dispatch({});

        return resParsed;
      }
    } catch (e) {
      console.log('catch', e);
    }
  }

  public async addUser(chatId: number | string, userId: number) {
    try {
      const response = await ChatAPI.addUsers({
        chatId,
        users: [userId]
      });

      if (response.status === 200) {
        window.store.dispatch({});
      }
    } catch (e) {
      console.log('catch', e);
    }
  }

  public async removeUser(chatId: number | string, userId: number) {
    try {
      const response = await ChatAPI.removeUsers({
        chatId,
        users: [userId]
      });

      if (response.status === 200) {
        window.store.dispatch({});
      }
    } catch (e) {
      console.log('catch', e);
    }
  }

  public async removeChat(chatId: number | string) {
    try {
      const response = await ChatAPI.removeChat({chatId});

      if (response.status === 200) {
        window.store.dispatch({currentChat: null});
      }
    } catch (e) {
      console.log('catch', e);
    }
  }

}

export default new ChatController();