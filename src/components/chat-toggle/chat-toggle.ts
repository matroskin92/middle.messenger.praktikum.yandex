import Block from '../../core/Block';

export class ChatToggle extends Block {
  constructor() {

    const onClick = (e: MouseEvent) => {
      e.preventDefault();
      location.href = 'index.html#chat';
    }

    super({events: { click: onClick }});

  }

  protected render(): string {
    return `
      <div class="chat-toggle">
        <button class="chat-toggle__button" type="button">
          <svg width="32" height="32" aria-hidden="true">
            <use xlink:href="#icon-toggle"></use>
          </svg>
        </button>
      </div>
    `;
  }
}
