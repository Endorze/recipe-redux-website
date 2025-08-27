"use client"
import { AccountDetails, LoginState } from "@/types/loginType";
import { createContext, useState } from "react";

export const GlobalLoginState = createContext<LoginState>({} as LoginState);

export function LoginProvider({children}: { children: React.ReactNode }) {
    const [user, setUser] = useState<AccountDetails | null>(null);

    return (<GlobalLoginState.Provider value={{ user, setUser }}>
            {children}
        </GlobalLoginState.Provider>)
}