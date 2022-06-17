import ChatAPI from '../api/chat';
import { UserDTO } from '../api/types';
import { transformUser } from '../utils';

class ChatController {
  private static instanse: ChatController;

  constructor() {
    if (ChatController.instanse) {
      return ChatController.instanse;
    }

    ChatController.instanse = this;
  }

  public async getToken(chatId: number | string) {
    return await ChatAPI.getToken(chatId)
      .then((response) => {
        if (typeof response  === 'string') {
          return JSON.parse(response);
        }
      })
      .then(({token}) => {
        return token;
      });
  }

  public async getChatsList(search: string | null = null) {
    return await ChatAPI.getChatsList({ title: search ?? '' })
      .then((response) => {
        if (typeof response  === 'string') {
          return JSON.parse(response);
        }
      });
  }

  public async getChatUsers(id: string) {
    return await ChatAPI.getChatUsers(id)
      .then((response) => {
        if (typeof response  === 'string') {
          return JSON.parse(response);
        }
      })
      .then((response) => {
        return response.map((user: any) => transformUser(user as UserDTO));
      });
  }

  public async addChat(title: string) {
    return await ChatAPI.addChat({ title })
      .then((response) => {
        if (typeof response  === 'string') {
          return JSON.parse(response);
        }
      })
      .then((response) => {
        window.store.dispatch({});

        return response;
      });
  }

  public async addUser(chatId: number | string, userId: number) {
    return await ChatAPI.addUsers({chatId, users: [userId]})
      .then(async () => {
        return await this.getChatUsers(chatId as string);
      })
      .then((users) => {
        const currentChat = window.store.getState().currentChat;
        window.store.dispatch({currentChat: {...currentChat, users}});
      });
  }

  public async removeUser(chatId: number | string, userId: number) {
    return await ChatAPI.removeUsers({chatId, users: [userId]})
    .then(async () => {
      return await this.getChatUsers(chatId as string);
    })
    .then((users) => {
      const currentChat = window.store.getState().currentChat;
      window.store.dispatch({currentChat: {...currentChat, users}});
    });
  }

  public async removeChat(chatId: number | string) {
    return await ChatAPI.removeChat({chatId})
      .then(() => {
        window.store.dispatch({currentChat: null});
      });
  }

}

export default new ChatController();