import { Block } from '../core';
import store, { StoreEvents } from '../core/Store';

// type Indexed<T = any> = | {[key in string]: T} | T;

export default function StoreConnect(Component: any) {
  // return function (Component: typeof Block) {
    return class extends Component {
      constructor(props: any) {
        let state = mapStateToProps(store.getState());
        super({ ...props, ...state });

        store.on(StoreEvents.UPDATED, () => {
          const newState = mapStateToProps(store.getState());
          this.setProps({ ...newState });
          state = newState;
        });
      }
    }
  // }
}
