import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);

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
        <CartContext.Provider value={{cart, añadirPizza,eliminarPizza, total}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;