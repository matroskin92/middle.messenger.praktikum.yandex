import Block from '../../core/Block';
import storeConnect from '../../hoc/store-connect';

class ProfileEdit extends Block {

  async componentDidMount() {
    this.setState({
      ...this.state,
      user: window.store.getState().user
    });
  }

  protected getStateFromProps() {
    this.state = {
      user: null,
    }
  }

  protected render(): string {
    return `
      <form class="profile-form" action="/">
        <div class="profile-form__item">
          {{{CustomInput
              label="E-mail"
              name="email"
              type="email"
              value=user.email
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
              label="Логин"
              name="login"
              type="text"
              value=user.login
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
              label="Имя"
              name="first_name"
              type="text"
              value=user.firstName
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
            label="Фамилия"
            name="second_name"
            type="text"
            value=user.secondName
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
            label="Имя в чате"
            name="display_name"
            type="text"
            value=user.displayName
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
            label="Телефон"
            name="phone"
            type="text"
            value=user.phone
          }}}
        </div>
        <div class="profile-form__submit">
          {{{Button size="50" text="Сохранить" type="submit"}}}
        </div>
      </form>
    `;
  }
}

const withStore = storeConnect((state) => ({
  user: state.user
}));

export default withStore(ProfileEdit);