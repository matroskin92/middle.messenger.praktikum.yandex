import Block from '../../core/Block';

export class ProfileEditPage extends Block {
  render() {
    return `
      <main>
        <div class="chat chat--aside-collapsed">
          {{{ChatAside}}}
          <div class="profile">
            <div class="profile__avatar">
              {{{ProfileAvatar}}}
            </div>
            <div class="profile__info">
              {{{ProfileEdit}}}
            </div>
          </div>
        </div>
      </main>
    `;
  }
}