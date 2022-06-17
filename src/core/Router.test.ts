/* eslint-disable max-classes-per-file */
/* eslint-disable no-multiple-empty-lines */
import 'global-jsdom/register';
import { expect } from 'chai';
import Router from './Router';
import Block from './Block';

describe('Router', () => {
  class PageOne extends Block {}
  class PageTwo extends Block {}
  class PageThree extends Block {}

  let router: Router;

  beforeEach(() => {
    router = new Router('#app');
    router
      .use('/', PageOne)
      .use('/one', PageTwo)
      .use('/two', PageThree)
      .start();
  });

  it('Router history length should changed', () => {
    router.go('/');
    router.go('/one');
    router.go('/two');
    expect(router.history.length).to.eq(4);
  });

  it('Path should changed to "/two"', () => {
    router.go('/two');
    const path: string | null = router.currentRoute?.path ?? '';

    expect(path).to.eq('/two');
  });

});