import Block from '../../core/Block';

export class SigninPage extends Block {
  render() {
    return `
      <main class="main--center">
        <div class="card">
          <h1 class="card__title">Вход</h1>
          <div class="card-form">
            <div class="card-form__item">
              {{{Input label="E-mail" id="email" type="email" name="email" error="Введите корректный email"}}}
            </div>
            <div class="card-form__item">
              {{{Input label="Логин" id="login" type="text" name="login" error="Неверный логин"}}}
            </div>
            <div class="card-form__item">
              {{{Input label="Имя" id="first-name" type="text" name="first_name" error="Не меньше 3 и не больше 32 символов"}}}
            </div>
            <div class="card-form__item">
              {{{Input label="Фамилия" id="second-name" type="text" name="second_name" error="Не меньше 3 и не больше 32 символов"}}}
            </div>
            <div class="card-form__item">
              {{{Input label="Имя в чате" id="display-name" type="text" name="display_name" error="Не меньше 3 и не больше 32 символов"}}}
            </div>
            <div class="card-form__item">
              {{{Input label="Телефон" id="phone" type="text" name="phone" error="Введите корректный номер телефона"}}}
            </div>
            <div class="card-form__item">
              {{{Input label="Пароль" id="password" type="password" name="password" error="Пароль не безопасен"}}}
            </div>
            <div class="card-form__item">
              {{{Input label="Пароль (ещё раз)" id="confrim" type="password" name="confrim" error="Пароли не совпадают"}}}
            </div>
            <div class="card-form__button">
              {{{Button type="submit" color="blue" size="100" text="Авторизоваться"}}}
            </div>
          </div>
          <div class="card-footer">
            {{{Link text="Уже есть аккаунт?" color="link" size="100" href="login.html"}}}
          </div>
        </div>
      </main>
    `;
  }
}