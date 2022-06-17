import Block from '../../core/Block';

export class LoginPage extends Block {
  render() {
    return `
      <main class="main--center">
        <div class="card">
          <h1 class="card__title">Вход</h1>
          {{{Login}}}
          <div class="card-footer">
            {{{Link text="Нет аккаунта?" color="link" size="100" href="/sign-up"}}}
          </div>
        </div>
      </main>
    `;
  }
}