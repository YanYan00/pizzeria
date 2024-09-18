import React from 'react'
import './CardPizza.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const CardPizza = ({pizza,añadirPizza}) => {
  const navigate = useNavigate();
  const verPizza = (pizza) => {
    navigate(`/pizzeria/${pizza.id}`);
  }
  return (
    <>
      <div className='cardPizza'>
        <img src={pizza.img} alt="imagen de pizza"/>
        <p id='descripcion'>{pizza.desc}</p>
        <h5>Pizza {pizza.name}</h5>
        <div className='info-pizza'>
          <h6>Ingredientes:</h6>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} className='ingrediente'>{ingredient}</li>
            ))}
          </ul>
          <h3>Precio: ${pizza.price.toLocaleString()}</h3>
          <div className='botones'>
            <Button id='boton1' onClick={()=> verPizza(pizza)}>Ver Más 👀</Button>
            <Button id='boton2' onClick={()=> añadirPizza(pizza)}>Añadir 🛒</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPizza