import Block from '../../core/Block';
import ChatController from '../../controllers/chat';

interface Contact {
  id: string;
  title: string;
}

export class ContactList extends Block {

  async componentDidMount() {
    const search = window.store.getState().search;
    const contacts = await ChatController.getChatsList(search);

    const contactsWithHandler = contacts.map((contact: Contact) => {

      const onClick = async (event: MouseEvent) => {
        event.preventDefault();

        const users = await ChatController.getChatUsers(contact.id);

        window.store.dispatch({
          currentChat: {
            id: contact.id,
            title: contact.title,
            users
          },
          messages: []
        });
      };

      return {...contact, onClick};
    });

    this.setState({contacts: contactsWithHandler});
  }

  protected getStateFromProps() {
    this.state = {
      contacts: []
    }
  }

  protected render(): string {
    return `
      <div class="chat-contacts">
        <div class="chat-contacts__item">
          {{#each contacts}}
            {{{ContactItem
              id=this.id
              ref=this.ref
              name=this.title
              image=this.avatar
              text=this.last_message.content
              unread=this.unread_count
              date=this.active
              onClick=this.onClick
            }}}
          {{/each}}
        </div>
      </div>
    `;
  }
}