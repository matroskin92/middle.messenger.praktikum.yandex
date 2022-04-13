import Block from '../../core/Block';
import Validate from '../../utils/validate';

export class Signin extends Block {

  protected getStateFromProps() {
    this.state = {
      values: {
        email: '',
        login: '',
        first_name: '',
        second_name: '',
        display_name: '',
        phone: '',
        password: '',
        password2: '',
      },
      errors: {
        email: '',
        login: '',
        first_name: '',
        second_name: '',
        display_name: '',
        phone: '',
        password: '',
        password2: '',
      },
      onSubmit: (event: MouseEvent) => {
        event?.preventDefault();

        const signinData = {
          email: (this.refs.email.querySelector('input') as HTMLInputElement).value,
          login: (this.refs.login.querySelector('input') as HTMLInputElement).value,
          first_name: (this.refs.first_name.querySelector('input') as HTMLInputElement).value,
          second_name: (this.refs.second_name.querySelector('input') as HTMLInputElement).value,
          display_name: (this.refs.display_name.querySelector('input') as HTMLInputElement).value,
          phone: (this.refs.phone.querySelector('input') as HTMLInputElement).value,
          password: (this.refs.password.querySelector('input') as HTMLInputElement).value,
          password2: (this.refs.password2.querySelector('input') as HTMLInputElement).value
        };

        const nextState = {
          errors: {
            email: Validate('email', signinData.email),
            login: Validate('login', signinData.login),
            first_name: Validate('first_name', signinData.first_name),
            second_name: Validate('second_name', signinData.second_name),
            display_name: Validate('display_name', signinData.display_name),
            phone: Validate('phone', signinData.phone),
            password: Validate('password', signinData.password),
            password2: Validate('password2', signinData.password2),
          },
          values: { ...signinData },
        };

        this.setState(nextState);

        console.log('action/signin', signinData);
      },
      onInputValidate: (event: MouseEvent) => {
        const inputName: string = (event.currentTarget as HTMLInputElement).name;
        const inputValue: string = (event.currentTarget as HTMLInputElement).value;
        const currentValues = {...this.state.values};

        if (inputValue.length === 0 && currentValues[inputName].length === 0) return;

        const nextState: Object = {
          values: {...this.state.values, ...Object.defineProperty({...this.state.values}, inputName, {value: inputValue})},
          errors: {...this.state.errors, ...Object.defineProperty({...this.state.errors}, inputName, {value: Validate(inputName, inputValue)})}
        };

        // Плохой метод, но в качестве упрощения
        if (JSON.stringify({...this.state}) !== JSON.stringify({...nextState}) ) {
          this.setState(nextState);
        }
      }
    }
  }

  render() {

    const { errors, values } = this.state;

    return `
      <form class="card-form" action="">
        <div class="card-form__item">
          {{{CustomInput
            label="E-mail"
            id="email"
            type="email"
            name="email"
            ref="email"
            value="${values.email}"
            error="${errors.email}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="card-form__item">
          {{{CustomInput
            label="Логин"
            id="login"
            type="text"
            name="login"
            ref="login"
            value="${values.login}"
            error="${errors.login}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="card-form__item">
          {{{CustomInput
            label="Имя"
            id="first-name"
            type="text"
            name="first_name"
            ref="first_name"
            value="${values.first_name}"
            error="${errors.first_name}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="card-form__item">
          {{{CustomInput
            label="Фамилия"
            id="second-name"
            type="text"
            name="second_name"
            ref="second_name"
            value="${values.second_name}"
            error="${errors.second_name}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="card-form__item">
          {{{CustomInput
            label="Имя в чате"
            id="display-name"
            type="text"
            name="display_name"
            ref="display_name"
            value="${values.display_name}"
            error="${errors.display_name}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="card-form__item">
          {{{CustomInput
            label="Телефон"
            id="phone"
            type="text"
            name="phone"
            ref="phone"
            value="${values.phone}"
            error="${errors.phone}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="card-form__item">
          {{{CustomInput
            label="Пароль"
            id="password"
            type="password"
            name="password"
            ref="password"
            value="${values.password}"
            error="${errors.password}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="card-form__item">
          {{{CustomInput
            label="Пароль (ещё раз)"
            id="password2"
            type="password"
            name="password2"
            ref="password2"
            value="${values.password2}"
            error="${errors.password2}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="card-form__button">
          {{{Button
            type="submit"
            color="blue"
            size="100"
            text="Регистрация"
            onClick=onSubmit
          }}}
        </div>
      </form>
    `;
  }
}