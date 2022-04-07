import Block from '../../core/Block';
import Validate from '../../utils/validate';

export class Login extends Block {

  protected getStateFromProps() {
    this.state = {
      values: {
        login: '',
        password: '',
      },
      errors: {
        login: '',
        password: '',
      },
      onSubmit: (event: MouseEvent) => {
        event?.preventDefault();

        const loginData = {
          login: (this.refs.login.querySelector('input') as HTMLInputElement).value,
          password: (this.refs.password.querySelector('input') as HTMLInputElement).value
        };

        const nextState = {
          errors: {
            login: Validate('login', loginData.login),
            password: Validate('password', loginData.password),
          },
          values: { ...loginData },
        };

        this.setState(nextState);

        console.log('action/login', loginData);
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
            label="Логин"
            id="login"
            ref="login"
            type="text"
            name="login"
            value="${values.login}"
            error="${errors.login}"
            onFocus=onInputValidate
            onBlur=onInputValidate
          }}}
        </div>
        <div class="card-form__item">
          {{{CustomInput
            label="Пароль"
            id="password"
            ref="password"
            type="password"
            name="password"
            value="${values.password}"
            error="${errors.password}"
            onFocus=onInputValidate
            onBlur=onInputValidate
          }}}
        </div>
        <div class="card-form__button">
          {{{Button
            type="submit"
            color="blue"
            size="100"
            text="Авторизоваться"
            onClick=onSubmit
          }}}
        </div>
      </form>
    `;
  }
}