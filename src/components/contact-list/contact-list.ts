import Block from '../../core/Block';

import imageContact1 from '../../img/contact/contact-1.png';
import imageContact2 from '../../img/contact/contact-2.png';
import imageContact3 from '../../img/contact/contact-3.png';
export class ContactList extends Block {

  constructor() {
    super({
      imageContact1,
      imageContact2,
      imageContact3,
    });
  }

  protected render(): string {
    return `
      <div class="chat-contacts">
        <div class="chat-contacts__item">
          {{{ContactItem name="Андрей" image=imageContact3 text="Изображение" date="12:00"}}}
          {{{ContactItem name="Василий Петрович" image=imageContact2 text="Друзья, у меня для вас особенный выпуск новостей!..." date="08:12" unread="48"}}}
          {{{ContactItem name="Киноклуб SUPERHD" image=imageContact1 text="Премьера нового фильма с Петькой в главной роли" date="Вчера" unread="2"}}}
          {{{ContactItem name="Петька" image=imageContact3 text="Привет, почему не отвечаешь?" date="06:12" unread="12"}}}
          {{{ContactItem name="Maxim Borisovich" image=imageContact2 text="Петя получил приглашение в чат" date="12 апреля"}}}
        </div>
      </div>
    `;
  }
}
