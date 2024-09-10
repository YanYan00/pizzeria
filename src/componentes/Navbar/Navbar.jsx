import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Navbar.css'
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
    const {total} = useContext(CartContext);
    const token = false;
    return (
      <div className='navbar'>
        <div className='nav-left'>
          <h4>Pizzería Mamma Mia!</h4>
          <Link to='/pizzeria'><Button className='botonNav'>🍕 Home</Button></Link>
          {token ? (
            <>
              <Link to='/pizzeria/profile'><Button className='botonNav'>🔓 Profile</Button></Link>
              <Button className='botonNav'>🔒 Logout</Button>
            </>
          ) : (
            <>
              <Link to='/pizzeria/login'><Button className='botonNav'>🔐 Login</Button></Link>
              <Link to='/pizzeria/register'><Button className='botonNav'>🔐 Register</Button></Link>
              
            </>
          )}
        </div>
        <Link to='/pizzeria/cart'><Button className='botonNav carro'>🛒 Total: ${total.toLocaleString()}</Button></Link>
      </div>
    );
}

export default Navbar