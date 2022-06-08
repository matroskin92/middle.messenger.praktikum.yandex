import ProfileAPI from '../api/profile';
import { ProfileData, PasswordData } from '../api/types';
import { transformUser, apiHasError } from '../utils';
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
    try {
      const response = await ProfileAPI.changeProfile(data);
      if (response.status === 200) {
        const resParsed = JSON.parse(response.response);
        if (apiHasError(resParsed)) return;

        window.store.dispatch({user: transformUser(resParsed as UserDTO), screen: '/settings'});
      }
    } catch (e) {
      console.log('catch', e);
    }
  }

  public async changePassword(data: PasswordData) {
    try {
      const response = await ProfileAPI.changePassword(data);
      if (response.status === 200 && response.response === 'OK') {
        window.store.dispatch({screen: '/settings'});
      } else if (response.status === 200) {
        const resParsed = JSON.parse(response.response);
        if (apiHasError(resParsed)) return;
      }
    } catch (e) {
      console.log('catch', e);
    }
  }

  public async changeAvatar(data: FormData) {
    try {
      const response = await ProfileAPI.changeAvatar(data);
      if (response.status === 200) {
        const resParsed = JSON.parse(response.response);
        if (apiHasError(resParsed)) return;

        window.store.dispatch({user: transformUser(resParsed as UserDTO), screen: '/settings'});
      }
    } catch (e) {
      console.log('catch', e);
    }
  }

}

export default new ProfileController();