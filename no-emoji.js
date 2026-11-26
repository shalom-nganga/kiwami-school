/* Kiwami School: removes every emoji from the page, including ones added later by other
   scripts (course cards, popup, course page). The star emoji becomes a plain gold ★.
   Arrows, ©, ✓ and ✕ are left alone. Add this at the END of <body> on each page:
   <script src="no-emoji.js"></script> */
(function () {
  const STAR = /\u2B50\uFE0F?/gu;
  const EMOJI = /[\u{1F300}-\u{1FAFF}\u23F1\u2699\u26A1\u2601\u2705\u2B50\uFE0F\u200D]/gu;
  const TEST = /[\u{1F300}-\u{1FAFF}\u23F1\u2699\u26A1\u2601\u2705\u2B50]/u;
  const SKIP = {SCRIPT:1, STYLE:1, TEXTAREA:1, TITLE:1, NOSCRIPT:1};

  const css = document.createElement('style');
  css.textContent =
    '.card-icon:empty,.cc-icon:empty,.wp-icon:empty,.nf-icon:empty,.path-ic:empty,.path-ai-ic:empty,.tile .ic:empty{display:none}' +
    '.rc-star,.rating-star-big{color:#f5b301}';
  document.head.appendChild(css);

  function fix(node) {
    if (!node.parentNode || SKIP[node.parentNode.nodeName]) return;
    const v = node.nodeValue;
    if (!TEST.test(v)) return;
    const out = v.replace(STAR, '\u2605').replace(EMOJI, '');
    if (out.trim() === '') node.remove(); else node.nodeValue = out;
  }
  function scan(root) {
    if (!root) return;
    if (root.nodeType === 3) return fix(root);
    if (root.nodeType !== 1 || SKIP[root.nodeName]) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const list = []; while (w.nextNode()) list.push(w.currentNode);
    list.forEach(fix);
  }
  scan(document.body);
  new MutationObserver(ms => ms.forEach(m => {
    m.addedNodes.forEach(scan);
    if (m.type === 'characterData') fix(m.target);
  })).observe(document.body, {childList: true, subtree: true, characterData: true});
})();