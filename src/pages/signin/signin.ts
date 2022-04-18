import Block from '../../core/Block';

export class SigninPage extends Block {
  render() {
    return `
      <main class="main--center">
        <div class="card">
          <h1 class="card__title">Вход</h1>
          {{{Signin}}}
          <div class="card-footer">
            {{{Link text="Уже есть аккаунт?" color="link" size="100" href="/login"}}}
          </div>
        </div>
      </main>
    `;
  }
}