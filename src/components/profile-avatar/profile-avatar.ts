import Block from '../../core/Block';
import ProfileController from '../../controllers/profile';
import imagePlaceholder from '../../img/contact/contact-1.png';

export class ProfileAvatar extends Block {

  protected getStateFromProps() {

    const user = window.store.getState().user;

    this.state = {
      user: null,
      values: {
        displayName: user.displayName ?? '',
        avatar: user.avatar ?? imagePlaceholder
      },
      errors: false,
      fileHandler: async (event: MouseEvent) => {
        event?.preventDefault();

        const { files }: { files: FileList | null } = event.target as HTMLInputElement;
        if (!files?.length) return;

        const avatarFromData = new FormData();
        avatarFromData.append('avatar', files[0]);

        await ProfileController.changeAvatar(avatarFromData);
      },
    }
  }


  protected render(): string {
    const { values } = this.state;
    return `
      <div class="profile-avatar">
        <div class="profile-avatar__image">
          <img src="${process.env.RESOURCES}${values.avatar}" width="130" height="130" alt="alt">
          {{{Input
            name="avatar"
            type="file"
            ref="avatar"
            onChange=fileHandler
          }}}
        </div>
        <span class="profile-avatar__username">${values.displayName}</span>
      </div>
    `;
  }
}
