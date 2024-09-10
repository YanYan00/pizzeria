import React, { useEffect, useState, useContext } from 'react'
import './Home.css'
import Header from '../../componentes/Header/Header'
import CardPizza from '../../componentes/CardPizza/CardPizza'
import { CartContext } from '../../context/CartContext'
import { PizzasContext } from '../../context/PizzasContext'

const Home = () => {
  const {añadirPizza} = useContext(CartContext);
  const {consultarApi,pizzas} = useContext(PizzasContext);
  useEffect(() => {
    consultarApi();
  }, [])
  return (
    <>
      <Header />
      <div className='cards'>
        {pizzas.map((pizza, index) => (
          <CardPizza pizza={pizza} key={index} añadirPizza ={añadirPizza} />
        ))}
      </div>
      
    </>
  )
}

export default Home