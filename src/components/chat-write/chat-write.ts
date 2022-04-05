import Block from '../../core/Block';

export class ChatWrite extends Block {
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
          <textarea class="chat-input__input" type="text" name="message" placeholder="Сообщение"></textarea>
        </div>
        <div class="chat-submit">
          <button class="chat-submit__button" type="submit">
            <svg width="28" height="28" aria-hidden="true">
              <use xlink:href="#icon-submit"></use>
            </svg>
          </button>
        </div>
      </form>
    `;
  }
}
