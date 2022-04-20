import Block from '../../core/Block';
import { Router } from '../../core';

interface ButtonProps {
  display_name: string;
}

export class ChatProfile extends Block {
  constructor({display_name}: ButtonProps) {

    const onClick = (e: MouseEvent) => {
      e.preventDefault();

      const router = new Router();
      router.go('/profile');
    }

    super({display_name, events: { click: onClick }});
  }

  protected render(): string {
    return `
      <div class="chat-profile">
        <span class="chat-profile__name">{{display_name}}</span>
        <a class="chat-profile__link" href="/profile">
          Профиль
          <svg width="4" height="8" aria-hidden="true">
            <use xlink:href="#icon-profile"></use>
          </svg>
        </a>
      </div>
    `;
  }
}
