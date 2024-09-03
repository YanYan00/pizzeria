import React, { useEffect,useState } from 'react'
import './CartPizza.css'

const CartPizza = () => {
    const [pizzas, setpizzas] = useState([]);
    useEffect(() => {
        consultarApi();
    }, [])
    const consultarApi = async()=>{
        const url = "http://localhost:5000/api/pizzas";
        try {
        const response = await fetch(url);
        const data = await response.json();
        setpizzas(data);
        }catch (error) {
        console.error("Hubo un problema con la solicitud Fetch:", error);
        }
    }
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const añadirPizza = (pizza)=>{
        {/*Se comprueba si existe la pizza dentro del carro en el caso de no existir se agrega a carro con cantidad 1,caso contrario se le suma 1*/}
        let pizzaCarro = cart.find(p => p.name == pizza.name);
        if(pizzaCarro){
            pizzaCarro.cantidad +=1;
            setCart([...cart]);
        }
        else{
            setCart([...cart,{...pizza,cantidad:1}]);    
        }
        setTotal(total+ pizza.price);
    };
    const eliminarPizza = (pizza) => {
        {/*Se comprueba si existe en el carro la pizza y dependiendo de la cantidad varia si restar en uno o eliminarlo del carro,variando el precio*/}
        let pizzaCarro = cart.find(p => p.name == pizza.name);
        if(pizzaCarro && pizzaCarro.cantidad>1){
            pizzaCarro.cantidad -=1;
            setCart([...cart]);
            setTotal(total - pizzaCarro.price);
        }
        else if(pizzaCarro && pizzaCarro.cantidad==1){
            setCart(cart.filter(p => p.name !== pizza.name));
            setTotal(total - pizzaCarro.price);
        }
    };
    return (
        <>
            <div className='carrito'>
                {/*Se crean container de pizzas los cuales son parecidos a los cards pero hechos para agregar y quitar pizzas del carrito*/}
                <div>
                    {pizzas.map((pizza, index) => (
                        <div key={index} className='pizzaContainer'>
                            <img src={pizza.img} alt="Esta es una imagen de la pizza" />
                            <div className='contenido-pizza'>
                                <div className='informacion'>
                                    <h4>Pizza {pizza.name}</h4>
                                    <p>Precio: ${pizza.price.toLocaleString()}</p>                        
                                </div>
                                <div className='botones'>
                                    <button onClick={() => añadirPizza(pizza)}>Añadir 🛒</button>
                                    <button onClick={() => eliminarPizza(pizza)}>Quitar ❌</button>
                                </div>                            
                            </div>

                        </div>
                    ))}
                </div>
                {/*Se crea infoCarro lo cual muestra el carro y su contenido, mostrando el total al sumar todas las pizzas agregadas a este*/}
                <div className='infoCarro'>
                    <h3>Total: ${total.toLocaleString()}</h3>                    
                    {cart.map((pizza , index) => (
                        <div key={index} className='item'>
                            <img src={pizza.img} alt="imagen de la pizza agregada al carro" />
                            <h5>Pizza {pizza.name}, ${pizza.price.toLocaleString()} x {pizza.cantidad}.</h5>
                        </div>
                    ))}    
                </div>
            </div>
        </>
    )
}
export default CartPizza