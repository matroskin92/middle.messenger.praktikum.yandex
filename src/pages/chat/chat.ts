import Block from '../../core/Block';

export class ChatPage extends Block {

  async componentDidMount() {
    const currentChat = window.store.getState().currentChat;
    if (currentChat) {
      this.setState({...currentChat});
    }
  }

  protected getStateFromProps() {
    this.state = {
      id: null,
      title: null
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