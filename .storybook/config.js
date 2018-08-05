import { configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import { withBackgrounds } from "@storybook/addon-backgrounds";
import results from '../.jest-test-results.json';

const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator(withTests({results})('button'));
addDecorator(withBackgrounds([
  { name: "white", value: "#ffffff", default: true },
  { name: "twitter", value: "#00aced", default: true },
  { name: "facebook", value: "#3b5998" },
]));

configure(loadStories, module);