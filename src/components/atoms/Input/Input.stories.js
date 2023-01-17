import { createInput } from './Input';

export default {
    title: 'Atoms/Input',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: { 
        /* value: { control: 'text' },  */
        type: {
            control: {type: 'select'},
            options: ['text', 'password', 'email'],
          },
          size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
          },      
    },
  };

  const Template = (placeholder, value, icon, size, ...args) => createInput(placeholder, value, icon, size, ...args);

  export const Input = Template.bind({});

  Input.args = {
    placeholder: "example", 
    value: ""
  };

  export const InputIcon = Template.bind({});
  InputIcon.args = {
    icon: "icono",
    placeholder: "example", 
    value: ""
  };

  export const InputSmall = Template.bind({});
  InputSmall.args = {
    size: 'small',
    placeholder: "example", 
    value: ""
  };

  export const InputMedium = Template.bind({});
  InputMedium.args = {
    size: 'medium',
    placeholder: "example", 
    value: ""
  };

  export const InputLarge = Template.bind({});
  InputLarge.args = {
    size: 'large',
    placeholder: "example", 
    value: ""
  };