import Block from '../../core/Block';

export class MainPage extends Block {
  render() {
    return `
      <main>
        <nav style="display:flex; flex-direction:column; margin:10vh auto; max-width: 300px;">
          {{{Link href="/login" text="Логин" color="link"}}}
          {{{Link href="/signup" text="Регистрация" color="link"}}}
          {{{Link href="/chat" text="Чат с пользователем" color="link"}}}
          {{{Link href="/profile" text="Профиль" color="link"}}}
          {{{Link href="/profile-edit" text="Редактирование профиля" color="link"}}}
          {{{Link href="/profile-password" text="Редактирование пароля" color="link"}}}
          {{{Link href="/404" text="404" color="link"}}}
          {{{Link href="/500" text="500" color="link"}}}
        </nav>
      </main>
    `;
  }
}