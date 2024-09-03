import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Profile.css'

const Profile = () => {
    const email= "jean.rojas@gmail.com";
    return (
        <div className='profile'>
            <div className='cont'>
                <p>Correo de usuario: {email}</p>
                <Button className='cerrar'>Cerrar Sesión</Button>
            </div>
            
        </div>
    )
}

export default Profile