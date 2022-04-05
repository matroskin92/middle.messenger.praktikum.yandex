import Block from '../../core/Block';

export class ProfilePage extends Block {
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
              {{{ProfileInfo}}}
            </div>
            <div class="profile__control">
              {{{ProfileControl}}}
            </div>
          </div>
        </div>
      </main>
    `;
  }
}