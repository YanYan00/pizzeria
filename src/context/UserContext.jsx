import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

const UserProvider = ({children})=> {
    const [email, setEmail] = useState(null);
    const [token,setToken] = useState(null);
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const logout = () =>{
      setEmail(null);
      setToken(null);
      setProfile(null);
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
    const getUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setEmail(data.email);
          setToken(data.id);
        } else {
          console.error("Error al obtener el perfil del usuario");
        }
      } catch (error) {
        console.error("Error de red al obtener el perfil del usuario", error);
      }
    };
    
    return(
        <UserContext.Provider value={{token,email,handleSubmit,getUserProfile,logout}}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;