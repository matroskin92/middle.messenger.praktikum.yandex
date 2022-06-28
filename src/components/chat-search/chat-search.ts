import Block from '@/core/Block';

export class ChatSearch extends Block {

  async componentDidMount() {
    const search = window.store.getState().search;
    this.setState({search});
  }

  protected getStateFromProps() {
    this.state = {
      search: '',
      onChange: async (event: MouseEvent) => {
        event?.preventDefault();

        const search = (this.refs.search.querySelector('input') as HTMLInputElement).value;

        window.store.dispatch({search});
      }
    }
  }

  protected render(): string {

    const { search } = this.state

    return `
      <div class="chat-search">
        {{{CustomInput
          name="search"
          type="text"
          ref="search"
          value="${search}"
          onBlur=onChange
        }}}
      </div>
    `;
  }
}
