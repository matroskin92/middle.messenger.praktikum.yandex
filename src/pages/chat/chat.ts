import Block from '@/core/Block';

export class ChatPage extends Block {

  protected getStateFromProps() {
    const currentChat = window.store.getState().currentChat;

    this.state = {
      id: currentChat?.id ?? null
    }
  }

  render() {
    return `
      <main>
        <div class="chat">
          {{{ChatAside}}}
          {{#if id}}
            {{{ChatBody}}}
          {{/if}}
        </div>
      </main>
    `;
  }
}