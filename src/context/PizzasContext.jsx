import { createContext,useState } from "react";

export const PizzasContext= createContext();
const PizzasProvider =({children})=>{
    const [pizzas,setPizzas] = useState([]);
    const consultarApi = async()=>{
        const url = "http://localhost:5000/api/pizzas";
        try {
          const response = await fetch(url);
          const data = await response.json();
          setPizzas(data);
        }catch (error) {
          console.error("Hubo un problema con la solicitud Fetch:", error);
        }
    };
    return(
        <PizzasContext.Provider value={{pizzas,consultarApi}}>
            {children}
        </PizzasContext.Provider>
    );
};
export default PizzasProvider;