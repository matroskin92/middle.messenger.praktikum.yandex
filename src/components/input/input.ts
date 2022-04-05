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
  constructor({onChange = () => {}, type = 'text', label, error, placeholder, value}: InputProps) {
    super({label, type, placeholder, value, error, events: {input: onChange}});
  }

  protected render(): string {
    return `
      <div class="custom-input">
        <label><span class="custom-input__label">{{label}}</span>
          <input type="{{type}}" id="input-{{id}}" name="{{name}}" value="{{value}}">
        </label>
        <div class="custom-input__error">{{error}}</div>
      </div>
    `
  }
}
