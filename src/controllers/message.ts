type Options = {
  chatId: string | number;
  userId: string | number;
  token: string;
}

class MessageController {
  private _socket!: WebSocket;
  private _userId!: string | number;
  private _chatId!: string | number;
  private _token!: string;
  private _ping: any;

  constructor() {
    this._open = this._open.bind(this);
    this._message = this._message.bind(this);
    this._error = this._error.bind(this);
    this._close = this._close.bind(this);
  }

  private _open() {
    this.getMessages(0);
    this._ping = setInterval(() => {
      this._socket.send(
        JSON.stringify({
          type: 'ping',
        }),
      );
    }, 10000);
  }

  private _close(event: CloseEventInit) {
    this._removeEvents();

    if (event.wasClean) {
      console.info('Соединение закрыто чисто');
    } else {
      console.error('Обрыв соединения');
    }

    if (event.code === 1006) {
      this.connection({
        userId: this._userId,
        chatId: this._chatId,
        token: this._token,
      })
    }
  }

  private _text(msg: any) {
    const [currentUser] = window.store.getState().currentChat.users.filter(
      (user: Indexed) => user.id === msg.user_id,
    )
    const message = msg.user_id === window.store.getState().user.id
      ? { ...msg, self: true }
      : {
        ...msg,
        self: false,
        name: currentUser?.login ?? 'anonymous',
      }

    const time = new Date(message.time);

    return {...message, time: `${time.getHours()}:${time.getMinutes()}`};
  }

  private _message(event: MessageEvent) {
    const data = JSON.parse(event.data);

    if (Array.isArray(data)) {
      const newMessages = data.map((msg) => {
        return this._text(msg);
      });

      const oldMessage = window.store.getState().messages;
      const messages = [...oldMessage, ...newMessages].reverse();

      if (oldMessage.length === 0 && messages.length > 0) {
        window.store.dispatch({messages});
      }
    }

    if (data.type === 'message') {
      const messages = [this._text(data), ...window.store.getState().messages].reverse();
      window.store.dispatch({messages});
    }
  }

  private _error(event: ErrorEventInit) {
    console.error('Ошибка', event.message);
  }

  private _addEvents() {
    this._socket.addEventListener('open', this._open);
    this._socket.addEventListener('close', this._close);
    this._socket.addEventListener('message', this._message);
    this._socket.addEventListener('error', this._error);
  }

  private _removeEvents() {
    this._socket.removeEventListener('open', this._open);
    this._socket.removeEventListener('close', this._close);
    this._socket.removeEventListener('message', this._message);
    this._socket.removeEventListener('error', this._error);
  }

  public connection(options: Options) {
    this._chatId = options.chatId;
    this._userId = options.userId;
    this._token = options.token;
    this._socket = new WebSocket(
      `${process.env.SOCKET_ENDPOINT}/${this._userId}/${this._chatId}/${this._token}`,
    )

    this._addEvents();
  }

  public getMessages(offset: number) {
    this._socket.send(
      JSON.stringify({
        content: offset.toString(),
        type: 'get old',
      }),
    )
  }

  public sendMessages(message: string) {
    this._socket.send(
      JSON.stringify({
        content: message,
        type: 'message',
      }),
    )
  }

  public leave() {
    clearInterval(this._ping);
    this._socket.close();
    this._removeEvents();
  }
}

export default new MessageController();