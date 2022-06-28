import Block from '@/core/Block';
import { Validate, isValid } from '@/utils/validate';
import ChatController from '@/controllers/chat';

export class ChatAdd extends Block {

  protected getStateFromProps() {

    this.state = {
      values: {
        'title': ''
      },
      onSubmit: async (event: MouseEvent) => {
        event?.preventDefault();

        const ChatAddData = {
          title: (this.refs.chat_add.querySelector('input') as HTMLInputElement).value
        };

        const ValidationResult = Validate(ChatAddData);

        const nextState = {
          errors: ValidationResult,
          values: { ...ChatAddData },
        };

        this.setState(nextState);

        if (isValid(ValidationResult)) {
          await ChatController.addChat(ChatAddData.title);
        }

      }
    }

  }

  protected render(): string {
    return `
      <div class="chat-add">
        {{{CustomInput
          name="chat_add"
          ref="chat_add"
          type="text"
          placeholder="Название"
        }}}
        {{{Button
          text="Добавить"
          color="red"
          onClick=onSubmit
        }}}
      </div>
    `;
  }
}
