import Block from '@/core/Block';

export class SigninPage extends Block {
  render() {
    return `
      <main class="main--center">
        <div class="card">
          <h1 class="card__title">Регистрация</h1>
          {{{SingUp}}}
          <div class="card-footer">
            {{{Link text="Уже есть аккаунт?" color="link" size="100" href="/"}}}
          </div>
        </div>
      </main>
    `;
  }
}