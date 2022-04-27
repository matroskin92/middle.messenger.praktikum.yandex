import MainPage from '../pages/main/index';
import LoginPage from '../pages/login';
import SigninPage from '../pages/signup';
import NotFoundPage from '../pages/not_found';
import ServerErrorPage from '../pages/server_error';
import ChatPage from '../pages/chat';
import ProfilePage from '../pages/profile';
import ProfileEditPage from '../pages/profile-edit';
import ProfilePasswordPage from '../pages/profile-password';
import { Block } from '../core';

export enum Screens {
  Main = 'index',
  Login = 'login',
  Signin = 'signin',
  Chat = 'chat',
  Profile = 'profile',
  ProfileEdit = 'profile-edit',
  ProfilePassword = 'profile-password',
  NotFound = '404',
  ServerError = '500',
}

const map: Record<Screens, typeof Block> = {
  [Screens.Main]: MainPage,
  [Screens.Login]: LoginPage,
  [Screens.Signin]: SigninPage,
  [Screens.Chat]: ChatPage,
  [Screens.Profile]: ProfilePage,
  [Screens.ProfileEdit]: ProfileEditPage,
  [Screens.ProfilePassword]: ProfilePasswordPage,
  [Screens.NotFound]: NotFoundPage,
  [Screens.ServerError]: ServerErrorPage,
};

const getScreenComponent = (screen: Screens): typeof Block => {
  return map[screen];
};

export default getScreenComponent;