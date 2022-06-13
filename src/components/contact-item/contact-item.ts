import Block from '../../core/Block';
import imagePlaceholder from '../../img/contact/contact-1.png';

interface ContactItemProps {
  id: string;
  image: string;
  name: string;
  text: string;
  date: string;
  unread: string;
  onClick: () => void;
}

export class ContactItem extends Block {

  constructor({id, image, name, text, date, unread, onClick}: ContactItemProps) {
    super({id, image, name, text, date, unread, events: {click: onClick}});
  }

  protected render(): string {

    const { image } = this.props;

    return `
      <div class="chat-contact">
        <div class="chat-contact__avatar">
          <div class="chat-avatar">
            <img src="${image ? process.env.RESOURCES + image : imagePlaceholder}" width="48" height="48" alt="{{name}}">
          </div>
        </div><span class="chat-contact__name">{{name}}</span>
        <div class="chat-contact__last">{{{text}}}</div>
        <time class="chat-contact__time">{{date}}</time>
        {{#if unread}}
          <div class="chat-contact__count"><span>{{unread}}</span></div>
        {{/if}}
      </div>
    `;
  }
}
