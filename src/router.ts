import { Router, Store } from './core';
import { getScreenComponent, Screens } from './utils';

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

    localStorage.setItem('current_chat', JSON.stringify(nextState.currentChat));

    if (!prevState.appIsInited && nextState.appIsInited) {
      router.start();
    }

    if (!nextState.screen) {
      nextState.screen = location.pathname;
    }

    // Доступные страницы для НЕавторизованных пользователей
    if (!nextState.user && (nextState.screen !== '/' && nextState.screen !== '/sign-up' && nextState.screen !== '/500' && nextState.screen !== '/404')) {
      router.go('/');
      return;

    // НЕ Доступные страницы для авторизованных пользователей
    } else if (!!nextState.user && (nextState.screen === '/' || nextState.screen === '/sign-up')) {
      router.go('/messenger');
      return;
    }

    if (prevState.screen !== nextState.screen) {
      router.go(nextState.screen);
    }

  });
}