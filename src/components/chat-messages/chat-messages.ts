import Block from '@/core/Block';

interface ChatMessagesProps {
  messages: [];
}

export class ChatMessages extends Block {

  constructor({messages}: ChatMessagesProps) {
    super({messages});
  }

  protected render(): string {

    return `
      <div class="chat-messages">
        {{#each messages}}
          <div class="chat-message chat-messages__item {{#if self}}chat-message--self{{/if}}">
            <div class="chat-message__text">
              <p>{{{content}}}</p>
            </div>
            <div class="chat-message__time">{{{time}}}</div>
          </div>
        {{/each}}
      </div>
    `;
  }
}
