import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../../componentes/Header/Header'
import CardPizza from '../../componentes/CardPizza/CardPizza'

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    consultarApi();
  }, [])
  const consultarApi = async()=>{
    const url = "http://localhost:5000/api/pizzas";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data);
    }catch (error) {
      console.error("Hubo un problema con la solicitud Fetch:", error);
    }
  }
  return (
    <>
      <Header />
      <div className='cards'>
        {pizzas.map((pizza, index) => (
          <CardPizza pizza={pizza} key={index} />
        ))}
      </div>
      
    </>
  )
}

export default Home