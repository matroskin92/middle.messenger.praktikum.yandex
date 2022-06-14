import Block from './Block';
import Route from './Route';

export default class Router {

  private static __instance: Router;
  private _currentRoute: Nullable<Route>;
  protected routes: Route[] = [];
  protected _history = window.history;
  private readonly _rootQuery: string | undefined;

  constructor(rootQuery: string = '#app') {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this._history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  get history() {
    return this._history;
  }

  get currentRoute() {
    return this._currentRoute;
  }

  use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = event => {
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render(route, pathname);
  }

  go(pathname: string) {
    this._history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this._history.back();
  }

  forward() {
    this._history.forward();
  }

  getRoute(pathname: string) {
    const route = this.routes.find(route => route.match(pathname));
    return route || this.routes.find(route => route.match('/404'));
  }

}