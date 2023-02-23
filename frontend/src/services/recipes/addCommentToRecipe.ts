import axios from "axios";

type Data = {
    recipe_id: string,
    name: string,
    image_url: string,
    token: string,
    comment: string,
    rating: number,
}

export default async function ({
    recipe_id,
    name,
    image_url,
    token,
    comment,
    rating
} : Data) {
    const API = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    if (API && token) {
        return await axios.post(API+'/recipe/add-comment', 
        { 
            recipe_id,
            name,
            image_url,
            comment,
            rating,
        }, 
        {
            headers: {
                'Authorization': 'Bearer '+token
            },
            timeout: 5000
        })
    }
    return
}