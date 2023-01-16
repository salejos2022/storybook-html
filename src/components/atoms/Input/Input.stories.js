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

      
    },
  };

  const Template = (placeholder, value, icon, ...args) => createInput(placeholder, value, icon, ...args);

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