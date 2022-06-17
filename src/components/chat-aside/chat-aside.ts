import Block from '../../core/Block';

export class ChatAside extends Block {

  protected render(): string {
    return `
      <div class="chat-aside">
        <div class="chat-aside__profile">
          {{{ChatProfile}}}
        </div>
        <div class="chat-aside__search">
          {{{ChatSearch}}}
        </div>
        <div class="chat-aside__contacts chat-aside__contacts--scroll">
          {{{ContactList}}}
        </div>
        <div class="chat-aside__add">
          {{{ChatAdd}}}
        </div>
        <div class="chat-aside__toggle">
          {{{ChatToggle}}}
        </div>
      </div>
    `;
  }
}
