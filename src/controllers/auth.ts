import AuthAPI from '../api/auth';
import { LoginData, SignUpData } from '../api/types';
import store from '../core/Store';
import Router from '../core/Router';

class AuthController {
  private router!: Router;
  private static instanse: AuthController;

  constructor() {
    if (AuthController.instanse) {
      return AuthController.instanse;
    }

    this.router = new Router();
    AuthController.instanse = this;
  }

  public async login(data: LoginData) {
    try {
      const response = await AuthAPI.login(data);
      if (response.status === 200) {
        await this.getUser();

        this.router.go('/messenger');
      }
    } catch (e) {
      console.log(e);
    }
  }

  public async getUser() {
    try {
      const response = await AuthAPI.getUser();

      if (response.status === 200) {
        store.set({'user': JSON.parse(response.response)});
      }
    } catch (e) {
      console.log(e);
    }
  }

  public async signUp(data: SignUpData) {
    try {
      const response = await AuthAPI.signUp(data);

      if (response.status === 200) {
        this.router.go('/messenger');
      }
    } catch (e) {
      console.log(e);
    }
  }

  public async logout() {
    try {
      const response = await AuthAPI.logout();
      if (response.status === 200) {
        store.set({'user': null});
        this.router.go('/');
      }
    } catch (e) {
      console.log(e);
    }
  }

}

export default new AuthController();