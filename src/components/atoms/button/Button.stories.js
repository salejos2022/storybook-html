import { type } from '@testing-library/user-event/dist/type';
import { createButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {    
    label: { control: 'text' },
    onClick: { action: 'onClick' },   
    theme: {
      control: {type: 'select'},
      options: ['primary', 'secondary', 'tertiary','danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, theme, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, theme, ...args });
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  theme: "primary",  
  label: 'Button',   
  onClick () {
    alert("You clicked on the button, so it triggered the alert box");
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: "secondary",
  label: 'Button',
  onClick () {
    alert("You clicked on the button, so it triggered the alert box");
  },
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  theme: "tertiary",
  label: 'Button',
  onClick () {
    alert("You clicked on the button, so it triggered the alert box");
  },
};

export const Danger = Template.bind({});
Danger.args = {
  theme: "danger",
  label: 'Button',
  onClick () {
    alert("You clicked on the button, so it triggered the alert box");
  },
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  onClick () {
    alert("You clicked on the button, so it triggered the alert box");
  },
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
  onClick () {
    alert("You clicked on the button, so it triggered the alert box");
  },
};
