export enum Screens {
  Login = '/',
  Signup = '/sign-up',
  Chat = '/messenger',
  Profile = '/settings',
  ProfileEdit = '/settings-edit',
  ProfilePassword = '/settings-password',
  NotFound = '/404',
  ServerError = '/500',
}

export type User = {
  id: number;
  login: string;
  firstName: string;
};

export type AppState = {
  screen: Screens | null;
  isLoading: boolean;
  loginFormError: string | null;
  user: User | null;
};