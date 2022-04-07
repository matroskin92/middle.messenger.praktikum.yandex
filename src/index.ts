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

registerComponent(Link);
registerComponent(Input);
registerComponent(Textarea);
registerComponent(CustomInput);
registerComponent(Button);
registerComponent(Error);
registerComponent(ChatAside);
registerComponent(ChatBody);
registerComponent(ChatSearch);
registerComponent(ChatProfile);
registerComponent(ChatToggle);
registerComponent(ContactList);
registerComponent(ContactItem);
registerComponent(ChatTopbar);
registerComponent(ChatMessages);
registerComponent(ChatWrite);
registerComponent(ProfileAvatar);
registerComponent(ProfileInfo);
registerComponent(ProfileControl);
registerComponent(ProfileEdit);
registerComponent(ProfilePassword);
registerComponent(Login);
registerComponent(Signin);

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.hash;

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