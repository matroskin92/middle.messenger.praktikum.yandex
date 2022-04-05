import Block from '../../core/Block';

export class ProfileAvatar extends Block {
  protected render(): string {
    return `
      <a class="profile-avatar" href="./profile-edit.html">
        <div class="profile-avatar__image">
          <img src="../img/contact/contact-1.png" srcset="../img/contact/contact-1@2x.png 2x" width="130" height="130" alt="alt">
        </div>
        <span class="profile-avatar__username">Иван</span>
      </a>
    `;
  }
}
