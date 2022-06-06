import { Block } from '../core';
import { StoreEvents } from '../core/Store';

export default function storeConnect(mapStateToProps: (state: Indexed) => Indexed) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(props: any) {
        let state = mapStateToProps(window.store.getState());
        super({ ...props, ...state });

        window.store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(window.store.getState());
          this.setProps({ ...newState });
          state = newState;
        });
      }
    }
  }
}