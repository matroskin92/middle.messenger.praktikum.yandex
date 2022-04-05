import Block from '../../core/Block';

export class ProfilePassword extends Block {

  protected render(): string {
    return `
      <form class="profile-form" action="/">
        <div class="profile-form__item">
          {{{Input label="Пароль" name="oldPassword" type="password" error="Пароль не безопасен"}}}
        </div>
        <div class="profile-form__item">
          {{{Input label="Пароль (ещё раз)" name="newPassword" type="password" error="Пароли не совпадаю"}}}
        </div>
        <div class="profile-form__submit">
          {{{Button size="50" text="Сохранить" type="submit"}}}
        </div>
      </form>
    `;
  }
}
