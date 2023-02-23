import axios from "axios";

export default async function (recipe_id: string) {

    const API = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    if (API) {
        return await axios.get(API+'/recipe/comments?recipe_id='+recipe_id)
    }
    return
}