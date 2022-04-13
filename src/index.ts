import { renderDOM, registerComponent }  from './core';
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

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.hash;

  console.log(currentPage);

  if (currentPage.includes('login')) {
    renderDOM(LoginPage);
  } else if (currentPage.includes('signin')) {
    renderDOM(SigninPage);
  } else if (currentPage.includes('404')) {
    renderDOM(NotFoundPage);
  } else if (currentPage.includes('500')) {
    renderDOM(ServerErrorPage);
  } else if (currentPage.includes('chat')) {
    renderDOM(ChatPage);
  } else if (currentPage.includes('profile-edit')) {
    renderDOM(ProfileEditPage);
  } else if (currentPage.includes('profile-password')) {
    renderDOM(ProfilePasswordPage);
  } else if (currentPage.includes('profile')) {
    renderDOM(ProfilePage);
  } else {
    renderDOM(MainPage);
  }

});