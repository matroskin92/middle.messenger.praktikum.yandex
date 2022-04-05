import Block from '../../core/Block';

export class ProfileEdit extends Block {

  protected render(): string {
    return `
      <form class="profile-form" action="/">
        <div class="profile-form__item">
          {{{Input label="E-mail" name="email" type="email" value="pochta@yandex.ru" error="Введите корректный email"}}}
        </div>
        <div class="profile-form__item">
          {{{Input label="Логин" name="login" type="text" value="mylogin" error="Неверный логин"}}}
        </div>
        <div class="profile-form__item">
          {{{Input label="Имя" name="first_name" type="text" value="Иван" error="Не меньше 3 и не больше 32 символов"}}}
        </div>
        <div class="profile-form__item">
          {{{Input label="Фамилия" name="second_name" type="text" value="Иванов" error="Не меньше 3 и не больше 32 символов"}}}
        </div>
        <div class="profile-form__item">
          {{{Input label="Имя в чате" name="display_name" type="text" value="Иваныч 99" error="Не меньше 3 и не больше 32 символов"}}}
        </div>
        <div class="profile-form__item">
          {{{Input label="Телефон" name="phone" type="text" value="7 (999) 802-34-44" error="Введите корректный номер телефона"}}}
        </div>
        <div class="profile-form__submit">
          {{{Button size="50" text="Сохранить" type="submit"}}}
        </div>
      </form>
    `;
  }
}
