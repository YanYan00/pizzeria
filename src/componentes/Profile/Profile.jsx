import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Profile.css'
import { UserContext } from '../../context/UserContext';

const Profile = () => {
    const [user, setUser] = useState(null);
    const {token,logout}= useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:5000/api/auth/me',{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((response)=> response.json())
        .then((data)=>setUser(data))
        .catch((error)=>{
            setUser(null);
        })
    },[token])
    return (
        <div className='profile'>
            {user ? (
                <div className='cont'>
                <p>Correo de usuario: {user.email}</p>
                <Button className='cerrar' onClick={logout}>Cerrar Sesión</Button>
                </div>) : (<p>Inicia sesion para revisar tu perfil.</p>)
            }
            
            
        </div>
    )
}

export default Profile