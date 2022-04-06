import Block from '../../core/Block';
export class ContactItem extends Block {

  protected render(): string {
    return `
      <div class="chat-contact">
        <div class="chat-contact__avatar">
          <div class="chat-avatar">
            <img src="{{image}}" width="48" height="48" alt="{{name}}">
          </div>
        </div><span class="chat-contact__name">{{name}}</span>
        <div class="chat-contact__last">{{{text}}}</div><time class="chat-contact__time">{{date}}</time>
        {{#if unread}}
          <div class="chat-contact__count"><span>{{unread}}</span></div>
        {{/if}}
      </div>
    `;
  }
}
