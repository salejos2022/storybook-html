import { createCard} from './Card';

export default {
  title: 'molecules/Card',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  }, 
  
};

const Template = (args) => createCard(args);

export const Card = Template.bind({});
Card.args = {
 
};

