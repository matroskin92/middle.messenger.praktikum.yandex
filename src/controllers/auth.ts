import AuthAPI from '../api/auth';
import { LoginData, SignUpData } from '../api/types';
import { transformUser, apiHasError } from '../utils';
import { UserDTO } from '../api/types';

class AuthController {
  private static instanse: AuthController;

  constructor() {
    if (AuthController.instanse) {
      return AuthController.instanse;
    }

    AuthController.instanse = this;
  }

  public async getUser() {
    // try {
      const response = await AuthAPI.getUser();
      if (response.status === 200) {
        const resParsed = JSON.parse(response.response);
        if (apiHasError(resParsed)) return;
        return transformUser(resParsed as UserDTO);
      }
    // } catch (e) {
    //   console.log('catch', e);
    // }
  }

  public async login(data: LoginData) {
    // try {
      const response = await AuthAPI.login(data);
      if (response.status === 200) {
        const user = await this.getUser();
        window.store.dispatch({user, screen: '/messenger'});
      }
    // } catch (e) {
    //   console.log(e);
    // }
  }

  public async signUp(data: SignUpData) {
    // try {
      const response = await AuthAPI.signUp(data);

      if (response.status === 200) {
        const user = await this.getUser();
        window.store.dispatch({user, screen: '/messenger'});
      }
    // } catch (e) {
    //   console.log(e);
    // }
  }

  public async logout() {
    // try {
      const response = await AuthAPI.logout();
      if (response.status === 200) {
        window.store.dispatch({'user': null, 'screen': '/'});
      }
    // } catch (e) {
    //   console.log(e);
    // }
  }

}

export default new AuthController();