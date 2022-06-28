import Block from '@/core/Block';

interface TooltipProps {
  items: [];
  onClick: () => void;
}

export class Tooltip extends Block {
  constructor({items, onClick}: TooltipProps) {
    super({items, events: {click: onClick}});
  }

  protected render(): string {
    return `
      <div class="tooltip">
        {{#each items}}
          <span class="tooltip__item" data-id="{{{id}}}">{{{value}}}</span>
        {{/each}}
      </div>
    `;
  }
}
