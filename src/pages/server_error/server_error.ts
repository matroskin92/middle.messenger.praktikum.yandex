import Block from '../../core/Block';

export class ServerErrorPage extends Block {
  render() {
    return `
      <main class="main--center">
        {{{Error code="500" text="Мы уже фиксим"}}}
      </main>
    `;
  }
}