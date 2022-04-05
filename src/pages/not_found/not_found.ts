import Block from '../../core/Block';

export class NotFoundPage extends Block {
  render() {
    return `
      <main class="main--center">
        {{{Error code="404" text="Вы не туда попали"}}}
      </main>
    `;
  }
}