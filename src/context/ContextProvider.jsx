import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext(null);

export const ContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const router = useRouter();

    function saveUserSession({ name, avatar_img, favorites, id, accessToken }) {
        setUserData({ ...userData, name, avatar_img, favorites, id, accessToken });
        const currLocalUserData = JSON.parse(sessionStorage.getItem('user'));
        sessionStorage.setItem('user', JSON.stringify({ ...currLocalUserData, name, avatar_img, favorites, id }));
    }

    function logout() {
        const auth = getAuth();
        signOut(auth);
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