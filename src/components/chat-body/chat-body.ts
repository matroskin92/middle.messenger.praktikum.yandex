import Block from '../../core/Block';
import storeConnect from '../../hoc/store-connect';
import messageController from '../../controllers/message';
import ChatController from '../../controllers/chat';

class ChatBody extends Block {

  async componentDidMount() {
    const storeState = window.store.getState();
    if (!storeState.currentChat) return;

    const token = await ChatController.getToken(storeState.currentChat.id);
    if (!token) return;

    messageController.connection({
      userId: storeState.user.id,
      chatId: storeState.currentChat.id,
      token,
    });
  }

  protected getStateFromProps() {
    this.state = {
      messages: window.store.getState().messages,
      messageHandler: async (event: MouseEvent) => {
        event.preventDefault();

        const textarea: HTMLTextAreaElement | null = (event.target as HTMLElement).querySelector('textarea');
        if (!textarea) return;

        const message: string | undefined = textarea?.value;
        if (!message) return;

        messageController.sendMessages(message);
        textarea.value = '';
      }
    }
  }

  protected render(): string {

    return `
      <div class="chat-body">
        <div class="chat-body__top">
          {{{ChatTopbar}}}
        </div>
        <div class="chat-body__middle chat-body__middle--scroll">
          {{{ChatMessages
            messages=messages
          }}}
        </div>
        <div class="chat-body__bottom">
          {{{ChatWrite
            onClick=messageHandler
          }}}
        </div>
      </div>
    `;
  }
}

const withStore = storeConnect((state) => ({
  messages: state.messages,
}));

export default withStore(ChatBody);