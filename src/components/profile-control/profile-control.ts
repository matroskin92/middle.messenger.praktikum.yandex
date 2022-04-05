import Block from '../../core/Block';

export class ProfileControl extends Block {

  protected render(): string {
    return `
      <ul class="profile-control">
        {{{Link href="profile-edit.html" text="Изменить данные" color="default"}}}
        {{{Link href="profile-password.html" text="Изменить пароль" color="default"}}}
        {{{Link href="index.html" text="Выйти" color="red"}}}
      </ul>
    `;
  }
}
