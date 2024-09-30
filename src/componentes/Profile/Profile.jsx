import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Profile.css'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const {getUserProfile,logout,token,email}= useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(!token){
            navigate('/pizzeria/login');
        }
        else{
            getUserProfile();
        }
      }, []);
    return (
        <div className='profile'>
            {token ? (
                <div className='cont'>
                <p>Correo de usuario: {email} </p>
                <Button className='cerrar' onClick={logout}>Cerrar Sesión  </Button>
                </div>) : (<></>)
            }
        </div>
    )
}
export default Profile