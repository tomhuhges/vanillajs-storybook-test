const create = ({ factory, selector }) => {
  console.log('creating components');
  return [...document.querySelectorAll(selector)].map(element => {
    const component = factory(element);
    if (component.cacheDOMElements) {
      component.cacheDOMElements();
    }
    if (component.bindEvents) {
      component.bindEvents().map(({target, event, callback}) => {
        target.removeEventListener(event, callback);
        target.addEventListener(event, callback);
      });
    }
    return component.init();
  });
}

export const createComponent = (selector, factory, reInitEvents) => {
  let components;
  window.addEventListener('load', () => {
    components = create({
      selector,
      factory
    });
  })
  return components;
}

export const createEvent = (target, event, callback) => ({
  target, event, callback
});