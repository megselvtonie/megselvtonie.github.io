document.addEventListener("DOMContentLoaded", () => {
  const symbols = {
    "♥": "card-heart",
    "♦": "card-diamond",
    "♣": "card-club",
    "♠": "card-spade",
  };

  function wrapCardSymbols(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      const replaced = text.replace(/([♥♦♣♠])/g, (match) => {
        const cls = symbols[match];
        return `<span class="${cls}">${match}</span>`;
      });

      if (replaced !== text) {
        const span = document.createElement("span");
        span.innerHTML = replaced;
        node.replaceWith(span);
      }
    } else if (
      node.nodeType === Node.ELEMENT_NODE &&
      node.tagName !== "SCRIPT" &&
      node.tagName !== "STYLE"
    ) {
      node.childNodes.forEach(wrapCardSymbols);
    }
  }

  wrapCardSymbols(document.body);
});
