import Block from '../../core/Block';

export class ContactList extends Block {
  protected render(): string {
    return `
      <div class="chat-contacts">
        <div class="chat-contacts__item">
          {{{ContactItem name="Андрей" image="contact-1" text="Изображение" date="12:00"}}}
          {{{ContactItem name="Василий Петрович" image="contact-2" text="Друзья, у меня для вас особенный выпуск новостей!..." date="08:12" unread="48"}}}
          {{{ContactItem name="Киноклуб SUPERHD" image="contact-1" text="Премьера нового фильма с Петькой в главной роли" date="Вчера" unread="2"}}}
          {{{ContactItem name="Петька" image="contact-3" text="Привет, почему не отвечаешь?" date="06:12" unread="12"}}}
          {{{ContactItem name="Maxim Borisovich" image="contact-2" text="Петя получил приглашение в чат" date="12 апреля"}}}
        </div>
      </div>
    `;
  }
}
