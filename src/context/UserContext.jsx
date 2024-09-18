import { createContext, useState } from "react";
export const UserContext = createContext();

const UserProvider = ({children})=> {
    const [token,setToken] = useState(true);
    const estadoToken = (tokenValidacion) => {
        setToken(tokenValidacion);
    }
    return(
        <UserContext.Provider value={{token,estadoToken}}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;