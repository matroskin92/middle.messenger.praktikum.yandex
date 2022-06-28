import Block from '@/core/Block';
import storeConnect from '@/hoc/store-connect';

class ChatProfile extends Block {
  constructor(props: any) {

    const onClick = (e: MouseEvent) => {
      e.preventDefault();

      window.store.dispatch({'screen': '/settings'});
    }

    super({events: { click: onClick }, ...props});
  }

  protected render(): string {
    const { user } = this.props;

    return `
      <div class="chat-profile">
        <span class="chat-profile__name">${user.firstName}</span>
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

const withStore = storeConnect((state) => ({
  user: state.user
}));

export default withStore(ChatProfile);