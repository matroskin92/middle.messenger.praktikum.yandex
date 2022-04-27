import Block from '../../core/Block';

export class ProfileControl extends Block {

  protected render(): string {
    return `
      <ul class="profile-control">
        {{{Link href="/settings-edit" text="Изменить данные" color="default"}}}
        {{{Link href="/settings-password" text="Изменить пароль" color="default"}}}
        {{{Link href="index.html" text="Выйти" color="red"}}}
      </ul>
    `;
  }
}
