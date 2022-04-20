import { renderDOM, registerComponent, Router, Store }  from './core';
import { diffObjectsDeep, getScreenComponent }  from './utils';
import { defaultState } from './store';

// Pages
import MainPage from './pages/main/index';
import LoginPage from './pages/login';
import SigninPage from './pages/signin';
import NotFoundPage from './pages/not_found';
import ServerErrorPage from './pages/server_error';
import ChatPage from './pages/chat';
import ProfilePage from './pages/profile';
import ProfileEditPage from './pages/profile-edit';
import ProfilePasswordPage from './pages/profile-password';

import './styles/style.scss';

import Link from './components/link';
import Input from './components/input';
import Textarea from './components/textarea';
import CustomInput from './components/custom-input';
import Button from './components/button';
import Error from './components/error';
import ChatAside from './components/chat-aside';
import ChatBody from './components/chat-body';
import ChatProfile from './components/chat-profile';
import ChatSearch from './components/chat-search';
import ChatToggle from './components/chat-toggle';
import ChatTopbar from './components/chat-topbar';
import ChatMessages from './components/chat-messages';
import ChatWrite from './components/chat-write';
import ContactList from './components/contact-list';
import ContactItem from './components/contact-item';
import ProfileAvatar from './components/profile-avatar';
import ProfileInfo from './components/profile-info';
import ProfileControl from './components/profile-control';
import ProfileEdit from './components/profile-edit';
import ProfilePassword from './components/profile-password';
import Login from './components/login';
import Signin from './components/signin';

registerComponent(Link, 'Link');
registerComponent(Input, 'Input');
registerComponent(Textarea, 'Textarea');
registerComponent(CustomInput, 'CustomInput');
registerComponent(Button, 'Button');
registerComponent(Error, 'Error');
registerComponent(ChatAside, 'ChatAside');
registerComponent(ChatBody, 'ChatBody');
registerComponent(ChatSearch, 'ChatSearch');
registerComponent(ChatProfile, 'ChatProfile');
registerComponent(ChatToggle, 'ChatToggle');
registerComponent(ContactList, 'ContactList');
registerComponent(ContactItem, 'ContactItem');
registerComponent(ChatTopbar, 'ChatTopbar');
registerComponent(ChatMessages, 'ChatMessages');
registerComponent(ChatWrite, 'ChatWrite');
registerComponent(ProfileAvatar, 'ProfileAvatar');
registerComponent(ProfileInfo, 'ProfileInfo');
registerComponent(ProfileControl, 'ProfileControl');
registerComponent(ProfileEdit, 'ProfileEdit');
registerComponent(ProfilePassword, 'ProfilePassword');
registerComponent(Login, 'Login');
registerComponent(Signin, 'Signin');

declare global {
  interface Window {
    store: Store<AppState>;
    router: Router;
  }
}

document.addEventListener('DOMContentLoaded', () => {

  const store = new Store<AppState>(defaultState);
  const router = new Router('#app');

  /**
   * Помещаем роутер и стор в глобальную область для доступа в хоках with*
   * @warning Не использовать такой способ на реальный проектах
   */
  window.router = router;
  window.store = store;

  /**
   * Глобальный слушатель изменений в сторе
   * для переключения активного экрана
   */
  store.on('changed', (prevState, nextState) => {
    // if (process.env.DEBUG) {
      console.log(
        '%cstore updated',
        'background: #222; color: #bada55',
        nextState,
      );
      console.log(JSON.stringify(diffObjectsDeep.map(prevState, nextState)));
    // }

    // router.go(window.location.pathname);
    if (prevState.screen !== nextState.screen) {
      const Page = getScreenComponent(nextState.screen);
      renderDOM(new Page());
    }
  });

  router
    .use('/', MainPage)
    .use('/login', LoginPage)
    .use('/signup', SigninPage)
    .use('/profile', ProfilePage)
    .use('/profile-edit', ProfileEditPage)
    .use('/profile-password', ProfilePasswordPage)
    .use('/chat', ChatPage)
    .use('/404', NotFoundPage)
    .use('/500', ServerErrorPage)
    .start()
})