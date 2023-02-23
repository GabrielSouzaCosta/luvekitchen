import axios from "axios";

type Data = {
    recipe_id: string,
    name: string,
    image_url: string,
    token: string,
}

export default async function ({
    recipe_id,
    name,
    image_url,
    token
} : Data) {
    const API = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    if (API && token) {
        return await axios.post(API+'/add-favorite', 
        { 
            recipe_id,
            name,
            image_url,
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