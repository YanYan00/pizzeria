import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

const UserProvider = ({children})=> {
    const [email, setEmail] = useState("")
    const [token,setToken] = useState("");
    const navigate = useNavigate();
    const logout = () =>{
      setEmail(null);
      setToken(null);
      console.log(email,token)
      
    }
    const handleSubmit= async (e, type, email ,password) =>{
      e.preventDefault();
      try {
        const response = await fetch(`http://localhost:5000/api/auth/${type}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
          alert("Logeado correctamente");
          setEmail(data.email);
          setToken(data.token);
          navigate('/pizzeria');
        } else {
          alert(data.error || "Error de autenticación");
        }
    
      } catch (error) {
        alert("Error en la autenticación");
      }
    }
    return(
        <UserContext.Provider value={{token,email,handleSubmit,logout}}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;