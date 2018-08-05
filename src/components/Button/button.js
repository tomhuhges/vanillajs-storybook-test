import { createComponent, createEvent } from '../../helpers';

const Button = element => {
  let button;

  const handleClick = () => {
    button.innerText = 'clicked!';
  }

  return {
    events: [
      createEvent(button, 'click', handleClick)
    ],
    cacheDOMElements() {
      button = element;
    },
    init: () => ({
      element
    })
  }
}

const buttons = createComponent('.js-button', Button);

export default buttons;
