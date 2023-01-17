import './input.css';

export const createInput = ({
    type = 'text',
    placeholder,
    value="", 
    id, 
    icon="", 
    size= "medium",      
}) => {    
    const input = document.createElement('input');    
    input.type = type;
    input.placeholder = placeholder;  
    input.value= value,
    input.id= id    

    const icons = icon ? `inputIcon--${icon}`: ``;   
    input.className = ['input', `input--${size}`, icons].join(' ');
    
    return input;
};
