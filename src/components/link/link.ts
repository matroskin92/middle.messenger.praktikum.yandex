// import { Router } from '../../core';
import Block from '../../core/Block';

interface LinkProps {
  text: string;
  color: string;
  size: string;
  href: string;
}

export class Link extends Block {
  constructor({text, color, size, href}: LinkProps) {

    const onClick = (event: MouseEvent) => {
      event.preventDefault();

      window.store.dispatch({
        'screen': this.props.href
      });
    };

    super({text, color, size, href, events: {click: onClick}});
  }

  render() {
    return `<a class="btn {{#if color}}btn--{{color}}{{/if}} {{#if size}}btn--{{size}}{{/if}}" href="{{href}}">{{text}}</a>`;
  }
}