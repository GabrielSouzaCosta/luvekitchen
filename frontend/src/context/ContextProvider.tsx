import { AppContextInterface, User } from "@/@types/context";
import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext<AppContextInterface | null>(null);

type ContextProps = {
    children: React.ReactNode,
}

export const ContextProvider = ({ children }: ContextProps) => {
    const [userData, setUserData] = useState<User>();

    function saveUserSession({ token, name, avatar_img, favorites } : User) {
        setUserData({ ...userData, token, name, avatar_img, favorites });
        const currLocalUserData = JSON.parse(sessionStorage.getItem('user'));
        sessionStorage.setItem('user', JSON.stringify({ ...currLocalUserData, token, name, avatar_img, favorites }))
    }

    function logout() {
        sessionStorage.removeItem('user');
        setUserData({});
    }

    return (
        <StateContext.Provider 
            value={{
                userData, setUserData, saveUserSession, logout
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);