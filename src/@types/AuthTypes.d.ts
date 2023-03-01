export type LoginData = {
    email: string,
    password: string,
}

export type RegisterData = {
    id: string,
    name: string,
    email: string,
    password: string,
    re_password: string,
    gender: 'masculine' | 'feminine',
    avatar_img: string,
}