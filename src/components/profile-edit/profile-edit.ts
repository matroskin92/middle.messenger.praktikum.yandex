import Block from '../../core/Block';

export class ProfileEdit extends Block {

  protected render(): string {
    return `
      <form class="profile-form" action="/">
        <div class="profile-form__item">
          {{{CustomInput
              label="E-mail"
              name="email"
              type="email"
              value="pochta@yandex.ru"
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
              label="Логин"
              name="login"
              type="text"
              value="mylogin"
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
              label="Имя"
              name="first_name"
              type="text" value="Иван"
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
            label="Фамилия"
            name="second_name"
            type="text"
            value="Иванов"
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
            label="Имя в чате"
            name="display_name"
            type="text"
            value="Иваныч 99"
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
            label="Телефон"
            name="phone"
            type="text"
            value="7 (999) 802-34-44"
          }}}
        </div>
        <div class="profile-form__submit">
          {{{Button size="50" text="Сохранить" type="submit"}}}
        </div>
      </form>
    `;
  }
}
