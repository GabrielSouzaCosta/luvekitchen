import { Dispatch } from "react";

export interface Favorite {
    recipe_id: string,
    name?: string,
    image_url?: string,
}

export interface User {
    id?: string,
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