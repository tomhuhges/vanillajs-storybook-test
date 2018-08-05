import { storiesOf } from '@storybook/html';
import { withActions } from '@storybook/addon-actions';
import { withMarkdownNotes } from '@storybook/addon-notes';
import { withStorySource } from '@storybook/addon-storysource';
import { withTests } from '@storybook/addon-jest';
import { text } from '@storybook/addon-knobs';
import results from '../../../.jest-test-results.json';

import button from './button.twig';
import '../../js/app.js';
import './button.css';

const markdown = `
# hello
hello
~~~js
<div>
  hello world!
  <Component/>
</div>
~~~
`;

storiesOf('Button', module)
  .addParameters({ jest: ['button'] })
  .addDecorator(withStorySource(button()))
  .addDecorator(withActions('click .js-button'))
  .addDecorator(withMarkdownNotes(markdown))
  // .addDecorator(withTests({results})('button'))
  .add('button', () => {
    const label = text('Label', 'Button label');
    return button({ data: { label } });
  });