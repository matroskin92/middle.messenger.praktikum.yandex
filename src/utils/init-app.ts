import AuthController from '../controllers/auth';
import type { Dispatch } from '../core/Store';

export async function initApp(dispatch: Dispatch<AppState>) {
  return await AuthController.getUser()
    .then((user) => {
      dispatch({ user, appIsInited: true })
    });
}