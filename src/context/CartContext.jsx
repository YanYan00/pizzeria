import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);
    const [sendCart, setSendCart] = useState(null);
    const {token} = useContext(UserContext);
    const handleSubmitCart = async (e,cart)=>{
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:5000/api/checkouts" ,
               {method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    cart,
                }),
               });
            const data = await response.json();
            if(response.ok){
                setSendCart(data.cart);
                alert('Carrito enviado correctamente');
            }
            else{
                console.error("Error al obtener el carro del usuario");
            }   
        } catch (error) {
            console.error("Error de red al obtener el carro del usuario", error);
        }
    }
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
    return(
        <CartContext.Provider value={{cart, añadirPizza,eliminarPizza, total , handleSubmitCart,sendCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;