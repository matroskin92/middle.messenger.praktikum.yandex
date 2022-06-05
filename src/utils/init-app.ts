import AuthController from '../controllers/auth';
// import { UserDTO } from '../api/types';
import type { Dispatch } from '../core/Store';
// import { transformUser, apiHasError } from '../utils';

export async function initApp(dispatch: Dispatch<AppState>) {

  // Ручкая задержка для демонстрации загрузочного экрана
  await new Promise(r => setTimeout(r, 700));

  try {
    const response = await AuthController.getUser();
    dispatch({ user: response });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ appIsInited: true });
  }
}