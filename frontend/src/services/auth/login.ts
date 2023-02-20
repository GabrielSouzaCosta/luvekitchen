import axios from "axios";
import { LoginData } from "../../@types/AuthTypes";

export default async function (data : LoginData) {
    const API = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    if (API) {
        return await axios.post(API+'/auth/login', data, {
            timeout: 5000
        })
    }
    return
}