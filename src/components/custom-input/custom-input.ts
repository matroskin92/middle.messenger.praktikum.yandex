import Block from '../../core/Block';

interface CustomInputProps {
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  label?: string;
  name?: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
}

export class CustomInput extends Block {
  constructor({
    onChange = () => {},
    onFocus = () => {},
    onBlur = () => {},
    type = 'text', name, label, error, placeholder, value}: CustomInputProps) {
    super({label, type, name, placeholder, value, error, onChange, onFocus, onBlur});
  }

  protected render(): string {
    return `
      <div class="custom-input {{#if error}}is-invalid{{/if}}">
        <label><span class="custom-input__label">{{label}}</span>
          {{{Input
            type=type
            name=name
            value=value
            placeholder=placeholder
            onChange=onChange
            onFocus=onFocus
            onBlur=onBlur
          }}}
        </label>
        {{#if error}}
          <div class="custom-input__error">{{error}}</div>
        {{/if}}
      </div>
    `
  }
}
