import { Block, renderDOM, registerComponent }  from './core';

import './styles/style.scss';

// const components = require('./components/**/index.ts') as {[key: string]: { default: typeof Block }};

// Object.values(components).forEach((component) => {
//   registerComponent(component.default);
// });

class MyComponent extends Block {
  render() {
    return `
      <div>hello world</div>
    `
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(MyComponent);
});