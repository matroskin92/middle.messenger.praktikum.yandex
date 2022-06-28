import Block from '@/core/Block';
import storeConnect from '@/hoc/store-connect';
import {Validate, isValid} from '@/utils/validate';
import diffObjectsDeep from '@/utils/diffObjectsDeep';
import ProfileController from '@/controllers/profile';

class ProfileEdit extends Block {

  protected getStateFromProps() {

    const user = window.store.getState().user;

    this.state = {
      user: null,
      values: {
        email: user.email ?? '',
        login: user.login ?? '',
        first_name: user.firstName ?? '',
        second_name: user.secondName ?? '',
        display_name: user.displayName ?? '',
        phone: user.phone ?? '',
      },
      errors: false,
      onSubmit: async (event: MouseEvent) => {
        event?.preventDefault();

        const ProfileEditData = {
          email: (this.refs.email.querySelector('input') as HTMLInputElement).value,
          login: (this.refs.login.querySelector('input') as HTMLInputElement).value,
          first_name: (this.refs.first_name.querySelector('input') as HTMLInputElement).value,
          second_name: (this.refs.second_name.querySelector('input') as HTMLInputElement).value,
          display_name: (this.refs.display_name.querySelector('input') as HTMLInputElement).value,
          phone: (this.refs.phone.querySelector('input') as HTMLInputElement).value
        };

        const ValidationResult = Validate(ProfileEditData);

        const nextState = {
          errors: ValidationResult,
          values: { ...ProfileEditData },
        };

        this.setState(nextState);

        if (isValid(ValidationResult)) {
          await ProfileController.changeProfile(ProfileEditData);
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
              label="E-mail"
              name="email"
              type="email"
              ref="email"
              value="${values.email}"
              error="${errors && errors.email ? errors.email : ''}"
              onBlur=onInputValidate
              onFocus=onInputValidate
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
              label="Логин"
              name="login"
              type="text"
              ref="login"
              value="${values.login}"
              error="${errors && errors.login ? errors.login : ''}"
              onBlur=onInputValidate
              onFocus=onInputValidate
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
              label="Имя"
              name="first_name"
              type="text"
              ref="first_name"
              value="${values.first_name}"
              error="${errors && errors.first_name ? errors.first_name : ''}"
              onBlur=onInputValidate
              onFocus=onInputValidate
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
            label="Фамилия"
            name="second_name"
            type="text"
            ref="second_name"
            value="${values.second_name}"
            error="${errors && errors.second_name ? errors.second_name : ''}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
            label="Имя в чате"
            name="display_name"
            type="text"
            ref="display_name"
            value="${values.display_name}"
            error="${errors && errors.display_name ? errors.display_name : ''}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="profile-form__item">
          {{{CustomInput
            label="Телефон"
            name="phone"
            type="text"
            ref="phone"
            value="${values.phone}"
            error="${errors && errors.phone ? errors.phone : ''}"
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

const withStore = storeConnect((state) => ({
  user: state.user
}));

export default withStore(ProfileEdit);