import { Dispatch } from "react";

export interface Favorite {
    recipe_id: string
}

export interface User {
    token?: string,
    name?: string,
    avatar_img?: string,
    favorites?: Favorite[],
}

export interface AppContextInterface {
    userData: User | undefined,
    setUserData: Dispatch<SetStateAction<null>>,
    saveUserSession: (data : User) => void,
    logout: () => void
}