import Block from '../../core/Block';

import imageContact1 from '../../img/contact/contact-1.png';
export class ProfileAvatar extends Block {

  constructor() {
    super({
      imageContact1
    });
  }

  protected render(): string {
    return `
      <a class="profile-avatar" href="/profile-edit">
        <div class="profile-avatar__image">
          <img src="{{imageContact1}}" width="130" height="130" alt="alt">
        </div>
        <span class="profile-avatar__username">Иван</span>
      </a>
    `;
  }
}
