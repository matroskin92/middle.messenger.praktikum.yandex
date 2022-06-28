import Block from '@/core/Block';

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

  constructor({onClick, ...props}: ContactItemProps) {
    super({...props, events: {click: onClick}});
  }

  protected render(): string {

    const { image, name } = this.props;
    const placeholder = `https://via.placeholder.com/48/0000FF/FFFFFF?text=${name.slice(0, 1)}`;

    return `
      <div class="chat-contact">
        <div class="chat-contact__avatar">
          <div class="chat-avatar">
            <img src="${image ? process.env.RESOURCES + image : placeholder}" width="48" height="48" alt="{{name}}">
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
