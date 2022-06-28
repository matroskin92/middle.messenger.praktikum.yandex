import Block from '@/core/Block';

interface TextareaProps {
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  name?: string;
  placeholder?: string;
  value?: string;
}
export class Textarea extends Block {
  constructor({onChange = () => {}, onFocus = () => {}, onBlur = () => {}, name, placeholder, value}: TextareaProps) {
    super({name, placeholder, value, events: {input: onChange, focus: onFocus, blur: onBlur}});
  }

  protected render(): string {
    return `
      <textarea name="{{name}}" placeholder="{{placeholder}}" autocomplete="off">{{value}}</textarea>
    `
  }
}
