// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("goods-item");
    li.textContent = `${item.name} (${item.category})`;
    ul.append(li);
  });
}

export function matching() {
  return items.filter((item) => item.inStock === true);
}

export function start() {
  renderItems(items);
  document.querySelector("#narrow").addEventListener("click", () => {
    renderItems(matching());
  });
}