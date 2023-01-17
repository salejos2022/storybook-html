import './card.css';
import { createButton } from '../../atoms/button/Button';
import { createInput } from '../../atoms/Input/Input';

export const createCard = ({Click}) => {
  const card = document.createElement('div');

  const wrapper = document.createElement('div');
  wrapper.className = 'card';

  const logo = `<div>
  <main >
    <div>
      <img class="image" src="https://media.istockphoto.com/id/1266659893/es/vector/port%C3%A1til-de-pantalla-blanca-en-blanco-aislado.jpg?s=612x612&w=0&k=20&c=MJLKn25rup6UWAEvjXIiTeQHfY348dntcMgLJGfiQLI=" alt="">
    </div>

    <section>
      <h2>Card</h2>
      <h3>Simple Card</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, corporis.</p>       
    </section> 
</main>
  </div>`;

  wrapper.insertAdjacentHTML('afterbegin', logo);
  wrapper.appendChild(createInput({type:"text", placeholder:"example", id:"1234", size: "large"}));
  wrapper.appendChild(createButton({ size: 'medium', label: 'click me', onClick: Click }));

  card.appendChild(wrapper);

  return card;
};
