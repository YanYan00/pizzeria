import React, {useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartPizza.css'
import { Button } from 'react-bootstrap';
import { UserContext } from '../../context/UserContext';

const CartPizza = () => {
    const {cart,total,añadirPizza,eliminarPizza} = useContext(CartContext);
    const {token} = useContext(UserContext);
    return (
        <>
            <div className='carrito'>
                <h3>Total: ${total.toLocaleString()}</h3>                    
                {cart.map((pizza , index) => (
                    <div key={index} className='item'>
                        <img src={pizza.img} alt="imagen de la pizza agregada al carro" />
                        <div className='contPizza'>
                            <h5>Pizza {pizza.name}, ${pizza.price.toLocaleString()} x {pizza.cantidad}.</h5>
                            <div className='botones'>
                                    <button onClick={() => añadirPizza(pizza)}>Añadir 🛒</button>
                                    <button onClick={() => eliminarPizza(pizza)}>Quitar ❌</button>
                            </div> 
                        </div>
                        
                    </div>
                ))}
                <Button className='botonPagar' disabled={!token}>Pagar</Button>   
            </div>
        </>
    )
}
export default CartPizza