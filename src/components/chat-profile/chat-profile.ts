import Block from '../../core/Block';

interface ButtonProps {
  display_name: string;
}

export class ChatProfile extends Block {
  constructor({display_name}: ButtonProps) {
    super({display_name});
  }

  protected render(): string {
    return `
      <div class="chat-profile">
        <span class="chat-profile__name">{{display_name}}</span>
        <a class="chat-profile__link" href="index.html#profile">
          Профиль
          <svg width="4" height="8" aria-hidden="true">
            <use xlink:href="#icon-profile"></use>
          </svg>
        </a>
      </div>
    `;
  }
}
