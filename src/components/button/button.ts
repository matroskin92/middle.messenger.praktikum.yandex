import Block from '@/core/Block';

interface ButtonProps {
  text: string;
  type: string;
  color: string;
  size: string;
  onClick: () => void;
}

export class Button extends Block {
  constructor({text, type, color, size, onClick}: ButtonProps) {
    super({text, type, color, size, events: {click: onClick}});
  }

  protected render(): string {
    return `
      <button class="btn {{#if color}}btn--{{color}}{{/if}} {{#if color}}btn--{{size}}{{/if}}" type="{{type}}">{{text}}</button>
    `;
  }
}
