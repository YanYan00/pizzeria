import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Profile.css'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const email= "jean.rojas@gmail.com";
    const navigate = useNavigate();
    const {estadoToken} = useContext(UserContext);
    const handleLogout = () =>{
        estadoToken(false);
        navigate('/pizzeria/login');
    }
    return (
        <div className='profile'>
            <div className='cont'>
                <p>Correo de usuario: {email}</p>
                <Button className='cerrar' onClick={handleLogout}>Cerrar Sesión</Button>
            </div>
            
        </div>
    )
}

export default Profile