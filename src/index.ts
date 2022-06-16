import { registerComponent, Router, Store }  from './core';
import { initRouter } from './router';
import { initApp } from './utils';

import './styles/style.scss';

import Link from './components/link';
import Input from './components/input';
import Textarea from './components/textarea';
import CustomInput from './components/custom-input';
import Button from './components/button';
import Tooltip from './components/tooltip';
import Error from './components/error';
import ChatAside from './components/chat-aside';
import ChatBody from './components/chat-body';
import ChatProfile from './components/chat-profile';
import ChatSearch from './components/chat-search';
import ChatToggle from './components/chat-toggle';
import ChatTopbar from './components/chat-topbar';
import ChatAdd from './components/chat-add';
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
registerComponent(Tooltip, 'Tooltip');
registerComponent(Error, 'Error');
registerComponent(ChatAside, 'ChatAside');
registerComponent(ChatBody, 'ChatBody');
registerComponent(ChatSearch, 'ChatSearch');
registerComponent(ChatProfile, 'ChatProfile');
registerComponent(ChatToggle, 'ChatToggle');
registerComponent(ChatAdd, 'ChatAdd');
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
  currentChat: localStorage.getItem('current_chat') ? JSON.parse(localStorage.getItem('current_chat') ?? '') : null,
  search: '',
  screen: null,
  user: null,
  messages: [],
  appIsInited: false
};

document.addEventListener('DOMContentLoaded', () => {

  const store = new Store<AppState>(defaultState);
  const router = new Router('#app');

  window.router = router;
  window.store = store;

  initRouter(router, store);
  store.dispatch(initApp);
});