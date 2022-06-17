import AuthAPI from '../api/auth';
import { LoginData, SignUpData } from '../api/types';
import { transformUser } from '../utils';
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
    return await AuthAPI.getUser()
      .then((response) => {
        if (typeof response  === 'string') {
          return JSON.parse(response);
        }
      })
      .then((response) => {
        return transformUser(response as UserDTO)
      });
  }

  public async login(data: LoginData) {
    return await AuthAPI.login(data)
      .then(async () => {
        return await this.getUser();
      })
      .then((user) => {
        window.store.dispatch({user, screen: '/messenger'})
      })
      .catch((e) => {
        const error = JSON.parse(e);
        console.error(error.response);
        window.store.dispatch({screen: '/500'});
      });
  }

  public async signUp(data: SignUpData) {
    return await AuthAPI.signUp(data)
      .then(async () => {
        return await this.getUser();
      })
      .then((user) => {
        window.store.dispatch({user, screen: '/messenger'})
      });
  }

  public async logout() {
    return await AuthAPI.logout()
      .then(() => {
        window.store.dispatch({'user': null, 'screen': '/'});
      });
  }

}

export default new AuthController();