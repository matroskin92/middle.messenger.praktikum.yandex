import Block from '@/core/Block';
import AuthController from '@/controllers/auth';

export class ProfileControl extends Block {

  protected getStateFromProps() {
    this.state = {
      onLogout: async (event: MouseEvent) => {
        event?.preventDefault();
  
        await AuthController.logout();
      }
    }
  }

  render(): string {
    return `
      <ul class="profile-control">
        {{{Link href="/settings-edit" text="Изменить данные" color="default"}}}
        {{{Link href="/settings-password" text="Изменить пароль" color="default"}}}
        {{{Button text="Выйти" color="red" onClick=onLogout}}}
      </ul>
    `;
  }
}
