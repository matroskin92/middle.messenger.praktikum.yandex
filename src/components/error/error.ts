import Block from '@/core/Block';

interface ButtonProps {
  code: string;
  text: string;
}

export class Error extends Block {
  constructor({text, code}: ButtonProps) {
    super({text, code});
  }

  protected render(): string {
    return `
      <div class="error">
        <h1 class="error__title">{{code}}</h1>
        <p class="error__text">{{text}}</p>
        <div class="error__back">
          {{{Link color="link" href="/messenger" text="Назад к чатам"}}}
        </div>
      </div>
    `;
  }
}
