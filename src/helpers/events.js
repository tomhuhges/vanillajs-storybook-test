const events = {};

export const on = (name, node, callback) => {
  if (!events.hasOwnProperty(name)) {
    events[name] = [];
  };
  events[name].push({
    node,
    callback
  });
};

const init = () => {
  console.log(events);
  for (name in events) {
    events[name].map(event => {
      document.addEventListener(name, e => {
        console.log(e.target, event.node)
        if (e.target === event.node) {
          event.callback();
        }
      });
    });
  }
};

window.addEventListener('load', () => {
  console.log('window loaded');
  init();
  const observer = new MutationObserver(mutationsList => {
    for(var mutation of mutationsList) {
      if (mutation.type == 'childList') {
          console.log('A child node has been added or removed.');
      }
      else if (mutation.type == 'attributes') {
          console.log('The ' + mutation.attributeName + ' attribute was modified.');
      }
    }
    init();
  });
  observer.observe(document, {
    attributes: true,
    childList: true,
    subtree: true
  });
});
