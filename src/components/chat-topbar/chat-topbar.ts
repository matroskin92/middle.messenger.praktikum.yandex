import Block from '../../core/Block';
import ChatController from '../../controllers/chat';
import ProfileController from '../../controllers/profile';

export class ChatTopbar extends Block {

  async componentDidMount() {
    const currentChat = window.store.getState().currentChat;
    if (currentChat) {

      const userWithHandler = currentChat.users.map((user: User) => {
        const onClick = (event: MouseEvent) => {
          event.preventDefault();
          this.state.removeUserHandler(currentChat.id, user.id);
        }

        return {...user, onClick};
      });
      this.setState({...currentChat, users: userWithHandler});
    }
  }

  protected getStateFromProps() {
    this.state = {
      id: null,
      title: null,
      users: null,
      user_add: null,
      search: null,
      searchUserHandler: async (event: MouseEvent) => {
        event.preventDefault();

        const user_add = (this.refs.user_add.querySelector('input') as HTMLInputElement).value;
        if (user_add) {
          const search = await ProfileController.searchUsers(user_add);
          this.setState({search, user_add});
        }
      },
      addUserHandler: async (event: MouseEvent) => {
        event.preventDefault();

        const userId: string | undefined =  (event.target as HTMLInputElement).dataset.id;
        const chatId: number = this.state.id;

        if (chatId && userId) {
          await ChatController.addUser(chatId, parseInt(userId, 10));
        }
      },
      removeUserHandler: async (chatId: string | number, userId: number) => {
        if (chatId && userId) {
          await ChatController.removeUser(chatId, userId);
        }
      },
      removeChatHandler: async (event: MouseEvent) => {
        event.preventDefault();

        const chatId = this.state.id;
        if (chatId) {
          await ChatController.removeChat(chatId);
        }

      }
    }
  }

  protected render(): string {

    return `
      <div class="chat-topbar">
        <div class="chat-topbar__name">{{{title}}}</div>
        <div class="chat-topbar__add">
          {{{CustomInput
            name="user_add"
            type="text"
            ref="user_add"
            value=user_add
            placeholder="Добавить пользователя"
            onBlur=searchUserHandler
          }}}
          {{#if search}}
            {{{Tooltip
              items=search
              onClick=addUserHandler
            }}}
          {{/if}}
        </div>
        {{#if users}}
        <div class="chat-topbar__users">
          <div class="chat-users">
            <span class="chat-users__title">Удалить:</span>
            {{#each users}}
              {{{Button
                text=this.login
                type="button"
                color="red"
                onClick=this.onClick
              }}}
            {{/each}}
          </div>
        </div>
        {{/if}}
        <div class="chat-topbar__remove">
          {{{Button
            text="Удалить чат"
            color="red"
            onClick=removeChatHandler
          }}}
        </div>
      </div>
    `;
  }
}
