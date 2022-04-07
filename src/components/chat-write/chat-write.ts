import Block from '../../core/Block';
import Validate from '../../utils/validate';

export class ChatWrite extends Block {

  protected getStateFromProps() {
    this.state = {
      values: {
        message: ''
      },
      errors: {
        values: ''
      },
      onSubmit: (event: MouseEvent) => {
        event?.preventDefault();

        const messageData = {
          message: (this.refs.message as HTMLInputElement).value
        }

        const nextState = {
          errors: {
            message: Validate('message', messageData.message)
          },
          values: { ...messageData },
        };

        this.setState(nextState);

        console.log('action/message', messageData);
      },
      onInputValidate: (event: MouseEvent) => {
        const inputName: string = (event.currentTarget as HTMLInputElement).name;
        const inputValue: string = (event.currentTarget as HTMLInputElement).value;
        const currentValues = {...this.state.values};

        if (inputValue.length === 0 && currentValues[inputName].length === 0) return;

        const nextState: Object = {
          values: {...this.state.values, ...Object.defineProperty({...this.state.values}, inputName, {value: inputValue})},
          errors: {...this.state.errors, ...Object.defineProperty({...this.state.errors}, inputName, {value: Validate(inputName, inputValue)})}
        };

        // Плохой метод, но в качестве упрощения
        if (JSON.stringify({...this.state}) !== JSON.stringify({...nextState}) ) {
          this.setState(nextState);
        }
      }
    }
  }

  protected render(): string {

    const { errors, values } = this.state;

    return `
      <form class="chat-write" action="/">
        <div class="chat-attach">
          <input type="file" name="attach">
          <button class="chat-attach__button" type="button">
            <svg width="32" height="32" aria-hidden="true">
              <use xlink:href="#icon-attach"></use>
            </svg>
          </button>
        </div>
        <div class="chat-input ${errors.message ? 'chat-input--error' : ''}">
          {{{Textarea
            id="message"
            name="message"
            ref="message"
            placeholder="Сообщение"
            value="${values.message}"
            onBlur=onInputValidate
            onFocus=onInputValidate
          }}}
        </div>
        <div class="chat-submit">
          {{{Button
            type="submit"
            text="Отправить"
            onClick=onSubmit
          }}}
        </div>
      </form>
    `;
  }
}
