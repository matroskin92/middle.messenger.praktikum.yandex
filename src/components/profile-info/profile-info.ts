import Block from '../../core/Block';

export class ProfileInfo extends Block {

  protected render(): string {
    return `
      <ul class="profile-summary">
        <li class="profile-summary__item">
          <div class="profile-between">
            <span>Почта</span>
            <span>pochta@yandex.ru</span>
          </div>
        </li>
        <li class="profile-summary__item">
          <div class="profile-between">
            <span>Логин</span>
            <span>ivanivanov</span>
          </div>
        </li>
        <li class="profile-summary__item">
          <div class="profile-between">
            <span>Имя</span>
            <span>Иван</span>
          </div>
        </li>
        <li class="profile-summary__item">
          <div class="profile-between">
            <span>Фамилия</span>
            <span>Иванов</span>
          </div>
        </li>
        <li class="profile-summary__item">
          <div class="profile-between">
            <span>Имя в чате</span>
            <span>Иванов99</span>
          </div>
        </li>
        <li class="profile-summary__item">
          <div class="profile-between">
            <span>Телефон</span>
            <span>+7 (909) 967 30 30</span>
          </div>
        </li>
      </ul>
    `;
  }
}
