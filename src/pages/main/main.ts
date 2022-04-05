import Block from '../../core/Block';

export class MainPage extends Block {
  render() {
    return `
      <main>
        <nav style="display:flex; flex-direction:column; margin:10vh auto; max-width: 300px;">
          {{{Link href="login.html" text="Логин" color="link"}}}
          {{{Link href="signin.html" text="Регистрация" color="link"}}}
          {{{Link href="chat.html" text="Чат с пользователем" color="link"}}}
          {{{Link href="profile.html" text="Профиль" color="link"}}}
          {{{Link href="profile-edit.html" text="Редактирование профиля" color="link"}}}
          {{{Link href="profile-password.html" text="Редактирование пароля" color="link"}}}
          {{{Link href="404.html" text="404" color="link"}}}
          {{{Link href="500.html" text="500" color="link"}}}
        </nav>
      </main>
    `;
  }
}