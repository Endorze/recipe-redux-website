import { LoginState } from "@/types/loginType";
import { createContext, useState } from "react";

export const GlobalLoginState = createContext<LoginState>({} as LoginState);

export function LoginProvider({children}: { children: React.ReactNode }) {
    const [loggedIn, setLoggedIn] = useState(false);

    return (<GlobalLoginState.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </GlobalLoginState.Provider>)
    
}