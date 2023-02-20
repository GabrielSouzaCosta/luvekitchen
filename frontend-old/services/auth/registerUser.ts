import axios from "axios";
import { RegisterData } from "../../@types/AuthTypes";
import { masculineAvatars, feminineAvatars } from '../../public/avatars';

export default async function (data : RegisterData) {
    const API = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    let avatar_img;
    if (data.gender === 'masculine') {
        avatar_img = masculineAvatars[Math.floor(Math.random()*masculineAvatars.length)];
    } else {
        avatar_img = feminineAvatars[Math.floor(Math.random()*feminineAvatars.length)];
    }

    if (API) {
        return await axios.post(API+'/auth/register', {
            ...data,
            'avatar_img': avatar_img
        })
    }
    return
}