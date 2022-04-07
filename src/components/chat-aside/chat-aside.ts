import Block from '../../core/Block';

export class ChatAside extends Block {

  protected render(): string {
    console.log('chat-aside');
    return `
      <div class="chat-aside">
        <div class="chat-aside__profile">
          {{{ChatProfile display_name="Василий Пупкин" }}}
        </div>
        <div class="chat-aside__search">
          {{{ChatSearch}}}
        </div>
        <div class="chat-aside__contacts chat-aside__contacts--scroll">
          {{{ContactList}}}
        </div>
        <div class="chat-aside__toggle">
          {{{ChatToggle}}}
        </div>
      </div>
    `;
  }
}
