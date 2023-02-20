export type LoginData = {
    email: string,
    password: string,
}

export type RegisterData = {
    name: string,
    email: string,
    password: string,
    re_password: string,
    gender: 'masculine' | 'feminine',
    avatar_img: string,
}