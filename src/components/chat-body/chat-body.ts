import Block from '../../core/Block';

export class ChatBody extends Block {
  protected render(): string {
    return `
      <div class="chat-body">
        <div class="chat-body__top">
          {{{ChatTopbar}}}
        </div>
        <div class="chat-body__middle chat-body__middle--scroll">
          {{{ChatMessages}}}
        </div>
        <div class="chat-body__bottom">
          {{{ChatWrite}}}
        </div>
      </div>
    `;
  }
}
