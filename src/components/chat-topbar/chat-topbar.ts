import Block from '../../core/Block';

export class ChatTopbar extends Block {
  protected render(): string {
    return `
      <div class="chat-topbar">
        <div class="chat-topbar__avatar">
          <div class="chat-avatar"><img src="../img/contact/contact-1.png" srcset="../img/contact/contact-1@2x.png 2x" width="48" height="48" alt="Андрей">
          </div>
        </div>
        <div class="chat-topbar__name">Андрей</div>
        <div class="chat-topbar__usermenu">
          <div class="chat-usermenu">
            <button class="chat-usermenu__button" type="button">
              <svg width="3" height="15" aria-hidden="true">
                <use xlink:href="#icon-usermenu"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
