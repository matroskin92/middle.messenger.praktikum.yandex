import Block from '../../core/Block';

export class MainPage extends Block {
  render() {
    return `
      <main>
        <nav style="display:flex; flex-direction:column; margin:10vh auto; max-width: 300px;">
          {{{Link href="index.html#login" text="Логин" color="link"}}}
          {{{Link href="index.html#signin" text="Регистрация" color="link"}}}
          {{{Link href="index.html#chat" text="Чат с пользователем" color="link"}}}
          {{{Link href="index.html#profile" text="Профиль" color="link"}}}
          {{{Link href="index.html#profile-edit" text="Редактирование профиля" color="link"}}}
          {{{Link href="index.html#profile-password" text="Редактирование пароля" color="link"}}}
          {{{Link href="index.html#404" text="404" color="link"}}}
          {{{Link href="index.html#500" text="500" color="link"}}}
        </nav>
      </main>
    `;
  }
}