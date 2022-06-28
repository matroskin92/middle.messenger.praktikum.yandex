import Block from '@/core/Block';
import {Validate, isValid} from '@/utils/validate';
import diffObjectsDeep from '@/utils/diffObjectsDeep';
import ProfileController from '@/controllers/profile';

export class ProfilePassword extends Block {

  protected getStateFromProps() {

    this.state = {
      values: {
        oldPassword: '',
        newPassword: ''
      },
      errors: false,
      onSubmit: async (event: MouseEvent) => {
        event?.preventDefault();

        const ProfilePasswordData = {
          oldPassword: (this.refs.oldPassword.querySelector('input') as HTMLInputElement).value,
          newPassword: (this.refs.newPassword.querySelector('input') as HTMLInputElement).value
        };

        const ValidationResult = Validate(ProfilePasswordData);

        const nextState = {
          errors: ValidationResult,
          values: { ...ProfilePasswordData },
        };

        this.setState(nextState);

        if (isValid(ValidationResult)) {
          await ProfileController.changePassword(ProfilePasswordData);
        }

      },
      onInputValidate: (event: MouseEvent) => {
        const inputName: string = (event.currentTarget as HTMLInputElement).name;
        const inputValue: string = (event.currentTarget as HTMLInputElement).value;
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

  protected render(): string {

    const { errors, values } = this.state;

    return `
      <form class="profile-form" action="/">
        <div class="profile-form__item">
          {{{CustomInput
            label="Старый пароль"
            name="oldPassword"
            type="password"
            ref="oldPassword"
            value="${values.oldPassword}"
            error="${errors && errors.oldPassword ? errors.oldPassword : ''}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
            label="Новый пароль"
            name="newPassword"
            type="password"
            ref="newPassword"
            value="${values.newPassword}"
            error="${errors && errors.newPassword ? errors.newPassword : ''}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="profile-form__submit">
          {{{Button
            size="50"
            text="Сохранить"
            type="submit"
            onClick=onSubmit
          }}}
        </div>
      </form>
    `;
  }
}
