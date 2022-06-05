import Block from '../../core/Block';

export class ChatProfile extends Block {
  constructor() {

    const onClick = (e: MouseEvent) => {
      e.preventDefault();

      window.store.dispatch({'screen': '/settings'});
    }

    super({events: { click: onClick }});
  }

  async componentDidMount() {
    this.setState({
      ...this.state,
      user: window.store.getState().user
    });
  }

  protected getStateFromProps() {
    this.state = {
      user: null,
    }
  }

  protected render(): string {
    return `
      <div class="chat-profile">
        <span class="chat-profile__name">{{user.firstName}}</span>
        <div class="chat-profile__link">
          Профиль
          <svg width="4" height="8" aria-hidden="true">
            <use xlink:href="#icon-profile"></use>
          </svg>
        </div>
      </div>
    `;
  }
}
