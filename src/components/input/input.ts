import Block from '../../core/Block';

interface InputProps {
  onChange?: () => void;
  label?: string;
  name?: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
}

export class Input extends Block {
  constructor({onChange = () => {}, type = 'text', name, label, error, placeholder, value}: InputProps) {
    super({label, type, name, placeholder, value, error, events: {input: onChange}});
  }

  protected render(): string {
    return `
      <div class="custom-input">
        <label><span class="custom-input__label">{{label}}</span>
          <input type="{{type}}" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}">
        </label>
        {{#if error}}
          <div class="custom-input__error">{{error}}</div>
        {{/if}}
      </div>
    `
  }
}
