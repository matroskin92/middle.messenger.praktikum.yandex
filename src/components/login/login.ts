import Block from '../../core/Block';
import {Validate, isValid} from '../../utils/validate';
import diffObjectsDeep from '../../utils/diffObjectsDeep';
import AuthController from '../../controllers/auth';

interface HTMLInputElement {
  value: string,
  name: string
}

interface MouseEvent {
  preventDefault(): void,
  currentTarget: HTMLInputElement
}

interface LoginData {
  login: string,
  password: string
}

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
      onSubmit: async (event: MouseEvent) => {
        event?.preventDefault();

        const loginData: LoginData = {
          login: this.refs.login.querySelector('input')?.value ?? '',
          password: this.refs.password.querySelector('input')?.value ?? ''
        };

        const ValidationResult = Validate(loginData);

        const nextState = {
          errors: ValidationResult,
          values: { ...loginData },
        };

        this.setState(nextState);

        if (isValid(ValidationResult)) {
          await AuthController.login(loginData);
        }

      },
      onInputValidate: (event: MouseEvent) => {
        const inputName: string = event.currentTarget?.name;
        const inputValue: string = event.currentTarget?.value;
        const currentValues = {...this.state.values};

        if (inputValue.length === 0 && currentValues[inputName].length === 0) return;
        if (inputValue === currentValues[inputName]) return;

        const validateResult = Validate({[inputName]: inputValue});

        const nextState: Object = {
          values: {...this.state.values, ...Object.defineProperty({...this.state.values}, inputName, {value: inputValue})},
          errors: {...this.state.errors, ...Object.defineProperty({...this.state.errors}, inputName, {value: validateResult[inputName]})}
        };

        if (diffObjectsDeep.compareValues(this.state, nextState)) {
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
            error="${errors && errors.login ? errors.login : ''}"
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
            error="${errors && errors.password ? errors.password : ''}"
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