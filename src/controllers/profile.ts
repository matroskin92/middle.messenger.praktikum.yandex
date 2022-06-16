import ProfileAPI from '../api/profile';
import { ProfileData, PasswordData } from '../api/types';
import { transformUser, transformSearchUser } from '../utils';
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
    return await ProfileAPI.changeProfile(data)
      .then((response) => {
        if (typeof response  === 'string') {
          return JSON.parse(response);
        }
      })
      .then((response) => {
        window.store.dispatch({user: transformUser(response as UserDTO), screen: '/settings'});
      });
  }

  public async changePassword(data: PasswordData) {
    return await ProfileAPI.changePassword(data)
      .then(() => {
        window.store.dispatch({screen: '/settings'});
      });
  }

  public async changeAvatar(data: FormData) {
    return await ProfileAPI.changeAvatar(data)
      .then((response) => {
        if (typeof response  === 'string') {
          return JSON.parse(response);
        }
      })
      .then((response) => {
        window.store.dispatch({user: transformUser(response as UserDTO), screen: '/settings'});
      });
  }

  public async searchUsers(login: string) {
    return await ProfileAPI.searchUser({login})
      .then((response) => {
        if (typeof response  === 'string') {
          return JSON.parse(response);
        }
      })
      .then((response) => {
        return response.slice(0, 5).map((user: any) => transformSearchUser(user as UserDTO));
      });
  }
}

export default new ProfileController();