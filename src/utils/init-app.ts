import AuthController from '../controllers/auth';
// import { UserDTO } from '../api/types';
import type { Dispatch } from '../core/Store';
// import { transformUser, apiHasError } from '../utils';

export async function initApp(dispatch: Dispatch<AppState>) {
  try {
    const response = await AuthController.getUser();
    dispatch({ user: response, appIsInited: true });
  } catch (err) {
    console.error(err);
  }
}