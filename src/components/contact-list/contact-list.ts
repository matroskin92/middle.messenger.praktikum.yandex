import Block from '../../core/Block';
import storeConnect from '../../hoc/store-connect';
import ChatController from '../../controllers/chat';

class ContactList extends Block {

  async componentDidMount() {
    const search = window.store.getState().search;
    const contacts = await ChatController.getChatsList(search);

    const contactsWithHandler = contacts.map((contact) => {
      const onClick = (event: MouseEvent) => {
        event.preventDefault();
        this.state.contactHandler(contact.id, contact.title);
      };

      return {...contact, onClick};
    });

    this.setState({contacts: contactsWithHandler});
  }

  protected getStateFromProps() {
    this.state = {
      contacts: [],
      contactHandler: (id: number, title: string) => {
        if (id && title) {
          window.store.dispatch({currentChat: {id, title}});
        }
      }
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

const withStore = storeConnect(() => ({}));

export default withStore(ContactList);