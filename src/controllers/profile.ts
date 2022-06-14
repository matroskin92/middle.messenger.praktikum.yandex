import ProfileAPI from '../api/profile';
import { ProfileData, PasswordData } from '../api/types';
import { transformUser, transformSearchUser, apiHasError } from '../utils';
import { UserDTO } from '../api/types';

class ProfileController {
  private static instanse: ProfileController;

  constructor() {
    if (ProfileController.instanse) {
      return ProfileController.instanse;
    }

    ProfileController.instanse = this;
  }

  public async changeProfile(data: ProfileData) {
    const response = await ProfileAPI.changeProfile(data);
    if (response.status === 200) {
      const resParsed = JSON.parse(response.response);
      if (apiHasError(resParsed)) return;

      window.store.dispatch({user: transformUser(resParsed as UserDTO), screen: '/settings'});
    }
  }

  public async changePassword(data: PasswordData) {
    const response = await ProfileAPI.changePassword(data);
    if (response.status === 200 && response.response === 'OK') {
      window.store.dispatch({screen: '/settings'});
    } else if (response.status === 200) {
      const resParsed = JSON.parse(response.response);
      if (apiHasError(resParsed)) return;
    }
  }

  public async changeAvatar(data: FormData) {
    const response = await ProfileAPI.changeAvatar(data);
    if (response.status === 200) {
      const resParsed = JSON.parse(response.response);
      if (apiHasError(resParsed)) return;

      window.store.dispatch({user: transformUser(resParsed as UserDTO), screen: '/settings'});
    }
  }

  public async searchUsers(login: string) {
    const response = await ProfileAPI.searchUser({login});
    if (response.status === 200) {
      const resParsed = JSON.parse(response.response);
      if (apiHasError(resParsed)) return;

      return resParsed.slice(0, 5).map((user: any) => transformSearchUser(user as UserDTO));
    }
  }
}

export default new ProfileController();