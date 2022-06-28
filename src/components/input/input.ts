import Block from '@/core/Block';
interface InputProps {
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  name?: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
}
export class Input extends Block {
  constructor({onChange = () => {}, onFocus = () => {}, onBlur = () => {}, type = 'text', name, placeholder, value}: InputProps) {
    super({type, name, placeholder, value, events: {input: onChange, focus: onFocus, blur: onBlur}});
  }

  protected render(): string {
    return `
      <input type="{{type}}" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}" autocomplete="off">
    `
  }
}
