import Block from '../../core/Block';

interface LinkProps {
  text: string;
  color: string;
  size: string;
  href: string;
}

export class Link extends Block {
  constructor({text, color, size, href}: LinkProps) {
    super({text, color, size, href});
  }

  render() {
    return `<a class="btn {{#if color}}btn--{{color}}{{/if}} {{#if size}}btn--{{size}}{{/if}}" href="{{href}}">{{text}}</a>`;
  }
}