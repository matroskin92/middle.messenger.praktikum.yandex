import Block from './Block';
import renderDOM from './renderDOM';
import { isEqual } from '../utils';

export default class Route {
  private _props: TStringObject;
  private _block: Nullable<Block>;
  private _blockClass: typeof Block;
  private _pathname: string;

  constructor(pathname: string, blockClass: typeof Block, props: TStringObject) {
    this._pathname = pathname;
    this._blockClass = blockClass;
    this._block = null;
    this._props = props;
  }

  get path() {
    return this._pathname;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.destroy();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    this._block = new this._blockClass(this._props);
    renderDOM(this._props.rootQuery, this._block as Block);
  }
}