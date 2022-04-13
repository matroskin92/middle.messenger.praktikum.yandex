import Block from '../../core/Block';

export class ChatSearch extends Block {
  protected render(): string {
    return `
      <div class="chat-search">
        <input type="text" name="search" placeholder="Поиск">
      </div>
    `;
  }
}
