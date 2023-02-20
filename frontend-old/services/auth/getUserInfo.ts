import axios from "axios";

export default async function (token : string) {
    const API = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    if (API) {
        return await axios.get(API+'/auth/user', {
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
    }
    return
}