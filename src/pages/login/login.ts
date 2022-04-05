import Block from '../../core/Block';

export class LoginPage extends Block {
  render() {
    return `
      <main class="main--center">
        <div class="card">
          <h1 class="card__title">Вход</h1>
          <div class="card-form">
            <div class="card-form__item">
              {{{Input label="Логин" id="login" type="text" name="login" error="Неверный логин"}}}
            </div>
            <div class="card-form__item">
              {{{Input label="Пароль" id="password" type="password" name="password" error="Пароль не безопасен"}}}
            </div>
            <div class="card-form__button">
              {{{Button type="submit" color="blue" size="100" text="Авторизоваться"}}}
            </div>
          </div>
          <div class="card-footer">
            {{{Link text="Нет аккаунта?" color="link" size="100" href="signin.html"}}}
          </div>
        </div>
      </main>
    `;
  }
}