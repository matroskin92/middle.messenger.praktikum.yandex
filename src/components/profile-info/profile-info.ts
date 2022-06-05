import Block from '../../core/Block';

export class ProfileInfo extends Block {

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
      <ul class="profile-summary">
        <li class="profile-summary__item">
          <div class="profile-between">
            <span>Почта</span>
            <span>{{user.email}}</span>
          </div>
        </li>
        <li class="profile-summary__item">
          <div class="profile-between">
            <span>Логин</span>
            <span>{{user.login}}</span>
          </div>
        </li>
        <li class="profile-summary__item">
          <div class="profile-between">
            <span>Имя</span>
            <span>{{user.firstName}}</span>
          </div>
        </li>
        <li class="profile-summary__item">
          <div class="profile-between">
            <span>Фамилия</span>
            <span>{{user.secondName}}</span>
          </div>
        </li>
        <li class="profile-summary__item">
          <div class="profile-between">
            <span>Имя в чате</span>
            <span>{{user.displayName}}</span>
          </div>
        </li>
        <li class="profile-summary__item">
          <div class="profile-between">
            <span>Телефон</span>
            <span>{{user.phone}}</span>
          </div>
        </li>
      </ul>
    `;
  }
}
