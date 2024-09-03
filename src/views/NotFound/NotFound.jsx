import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notFound'>
        <h1>Lamentamos no encontrar su pizza favorita</h1>
        <img src="https://static.vecteezy.com/system/resources/previews/026/776/065/original/cute-gloomy-pizza-character-funny-sad-pie-cartoon-emoticon-in-flat-style-food-emoji-illustration-vector.jpg" alt="pizza animada" />
        <Link to='/pizzeria'>Pulse aqui para volver</Link>    
    </div>
  )
}

export default NotFound