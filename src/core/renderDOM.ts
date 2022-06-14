import Block from './Block';

export default function renderDOM(query: string | undefined, block: Block) {
  const root = document.querySelector(query as string);

  if (root) {
    root.innerHTML = '';
    root.appendChild(block.getContent());
    return root;
  }

  return false;
}
