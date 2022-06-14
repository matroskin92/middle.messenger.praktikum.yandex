import Block from '../../core/Block';

interface ChatWriteProps {
  onClick: () => void;
}

export class ChatWrite extends Block {

  constructor({onClick}: ChatWriteProps) {
    super({events: {submit: onClick}});
  }

  protected render(): string {

    return `
      <form class="chat-write" action="/">
        <div class="chat-attach">
          <input type="file" name="attach">
          <button class="chat-attach__button" type="button">
            <svg width="32" height="32" aria-hidden="true">
              <use xlink:href="#icon-attach"></use>
            </svg>
          </button>
        </div>
        <div class="chat-input">
          {{{Textarea
            id="message"
            name="message"
            ref="message"
            placeholder="Сообщение"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="chat-submit">
          {{{Button
            type="submit"
            text="Отправить"
          }}}
        </div>
      </form>
    `;
  }
}
