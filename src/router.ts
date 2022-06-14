import { Router, Store, renderDOM } from './core';
import { diffObjectsDeep, getScreenComponent, Screens } from './utils';

const routes = [
  {
    path: Screens.Login,
    block: getScreenComponent(Screens.Login),
    shouldAuthorized: false,
  },
  {
    path: Screens.Signup,
    block: getScreenComponent(Screens.Signup),
    shouldAuthorized: false,
  },
  {
    path: Screens.Chat,
    block: getScreenComponent(Screens.Chat),
    shouldAuthorized: true,
  },
  {
    path: Screens.Profile,
    block: getScreenComponent(Screens.Profile),
    shouldAuthorized: true,
  },
  {
    path: Screens.ProfileEdit,
    block: getScreenComponent(Screens.ProfileEdit),
    shouldAuthorized: true,
  },
  {
    path: Screens.ProfilePassword,
    block: getScreenComponent(Screens.ProfilePassword),
    shouldAuthorized: true,
  },
  {
    path: Screens.NotFound,
    block: getScreenComponent(Screens.NotFound),
    shouldAuthorized: false,
  },
  {
    path: Screens.ServerError,
    block: getScreenComponent(Screens.ServerError),
    shouldAuthorized: false,
  },
];

export function initRouter(router: Router, store: Store<AppState>) {

  routes.forEach(route => {
    router.use(route.path, route.block);
  });

  /**
   * Глобальный слушатель изменений в сторе
   * для переключения активного экрана
   */
  store.on('changed', (prevState, nextState) => {
    if (!prevState.appIsInited && nextState.appIsInited) {
      router.start();
    }

    if (!nextState.screen) {
      nextState.screen = location.pathname;
    }

    if (!nextState.user && (nextState.screen !== '/' && nextState.screen !== '/sign-up')) {
      router.go('/');
      return;
    } else if (!!nextState.user && (nextState.screen === '/' || nextState.screen === '/sign-up')) {
      router.go('/messenger');
      return;
    }

    if (prevState.screen !== nextState.screen) {
      router.go(nextState.screen);
    }

  });
}