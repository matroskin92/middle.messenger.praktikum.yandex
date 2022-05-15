import { renderDOM, registerComponent, Router, Store }  from './core';
import { diffObjectsDeep, getScreenComponent, Screens }  from './utils';

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
import SingUp from './components/signup';

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
registerComponent(SingUp, 'SingUp');

const defaultState: AppState = {
  isLoading: false,
  screen: null,
  user: null,
};

document.addEventListener('DOMContentLoaded', () => {

  const store = new Store<AppState>(defaultState);
  const router = new Router('#app');

  window.router = router;
  window.store = store;

  store.on('changed', (prevState: AppState, nextState: AppState) => {
    if (process.env.DEBUG) {
      console.log(
        '%cstore updated',
        'background: #222; color: #bada55',
        nextState,
      );
      console.log(JSON.stringify(diffObjectsDeep.map(prevState, nextState)));
    }

    if (prevState.screen !== nextState.screen) {
      const Page = getScreenComponent(nextState.screen);
      renderDOM('#app', new Page());
    }
  });

  router
    .use(Screens.Login, getScreenComponent(Screens.Login))
    .use(Screens.Signup, getScreenComponent(Screens.Signup))
    .use(Screens.Chat, getScreenComponent(Screens.Chat))
    .use(Screens.Profile, getScreenComponent(Screens.Profile))
    .use(Screens.ProfileEdit, getScreenComponent(Screens.ProfileEdit))
    .use(Screens.ProfilePassword, getScreenComponent(Screens.ProfilePassword))
    .use(Screens.NotFound, getScreenComponent(Screens.NotFound))
    .use(Screens.ServerError, getScreenComponent(Screens.ServerError))
    .start()
});