import Block from '@/core/Block';

export class ProfilePasswordPage extends Block {
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
              {{{ProfilePassword}}}
            </div>
          </div>
        </div>
      </main>
    `;
  }
}