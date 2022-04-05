import Block from '../../core/Block';

export class ChatMessages extends Block {
  protected render(): string {
    return `
      <div class="chat-messages">
        <div class="chat-messages__item chat-messages__date">19 июня</div>
        <div class="chat-messages__item">
          <div class="chat-message chat-message--long">
            <div class="chat-message__text">
              <p>
                Привет! Смотри, тут всплыл интересный кусок лунной космической истории — 
                НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для 
                полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL 
                — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, 
                так как астронавты с собой забрали только кассеты с пленкой.
              </p>
              <p>
                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на 
                ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из
                них недавно продали на аукционе за 45000 евро.
              </p>
            </div>
            <div class="chat-message__time">11:56</div>
          </div>
        </div>
        <div class="chat-messages__item">
          <div class="chat-message chat-message--long">
            <div class="chat-message__text">
              <p>
                Привет! Смотри, тут всплыл интересный кусок лунной космической истории — 
                НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для 
                полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL 
                — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, 
                так как астронавты с собой забрали только кассеты с пленкой.
              </p>
              <p>
                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на 
                ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из
                них недавно продали на аукционе за 45000 евро.
              </p>
            </div>
            <div class="chat-message__time">11:56</div>
          </div>
        </div>
        <div class="chat-messages__item">
          <div class="chat-message chat-message--long">
            <div class="chat-message__text">
              <p>
                Привет! Смотри, тут всплыл интересный кусок лунной космической истории — 
                НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для 
                полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL 
                — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, 
                так как астронавты с собой забрали только кассеты с пленкой.
              </p>
              <p>
                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на 
                ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из
                них недавно продали на аукционе за 45000 евро.
              </p>
            </div>
            <div class="chat-message__time">11:56</div>
          </div>
        </div>
        <div class="chat-messages__item">
          <div class="chat-message chat-message--image">
            <div class="chat-message__image"><img src="../img/messages/photo-1.png" width="316" height="211" alt=""></div>
            <div class="chat-message__time">11:57</div>
          </div>
        </div>
        <div class="chat-messages__item chat-messages__item--end"></div>
        <div class="chat-message chat-message--self">
          <div class="chat-message__text">
            <p>Круто!</p>
          </div>
          <div class="chat-message__time">12:00</div>
          <div class="chat-message__status">
            <svg width="10" height="4" aria-hidden="true">
              <use xlink:href="#icon-read"></use>
            </svg>
          </div>
        </div>
      </div>
    `;
  }
}
