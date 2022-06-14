import AuthController from '../controllers/auth';
import type { Dispatch } from '../core/Store';

export async function initApp(dispatch: Dispatch<AppState>) {
  try {
    const response = await AuthController.getUser();
    dispatch({ user: response, appIsInited: true });
  } catch (err) {
    console.error(err);
  }
}