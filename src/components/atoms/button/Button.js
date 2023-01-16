import './button.css';

export const createButton = ({
  theme  = "primary",
  size = 'medium',    
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick); 

  const mode = `buttonTheme--${theme}`;  
  btn.className = ['button', `button--${size}`, mode].join(' ');

  return btn;
};
