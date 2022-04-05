import Block from '../../core/Block';

export class ChatPage extends Block {
  render() {
    return `
      <main>
        <div class="chat">
          {{{ChatAside}}}
          {{{ChatBody}}}
        </div>
      </main>
    `;
  }
}