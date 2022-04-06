import Block from '../../core/Block';

export class Login extends Block {

  constructor() {
    const onClick = (e: MouseEvent) => {
      e.preventDefault();

      const formContainer = e.target.closest('form');
      console.log(formContainer)
      const formData = new FormData(formContainer);

      for (let value of formData.entries()) {
        console.log(value[0]+ ', '+ value[1]);
      }

    }

    super({events: { click: onClick }});
  }

  render() {
    return `
      <form class="card-form" action="">
        <div class="card-form__item">
          {{{Input label="Логин" id="login" type="text" name="login" error="Неверный логин"}}}
        </div>
        <div class="card-form__item">
          {{{Input label="Пароль" id="password" type="password" name="password" error="Пароль не безопасен"}}}
        </div>
        <div class="card-form__button">
          {{{Button type="submit" color="blue" size="100" text="Авторизоваться" onClick=onLogin}}}
        </div>
      </form>
    `;
  }
}