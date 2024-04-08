import { post } from "@/utils/request";

export function login(data: {
    username: string,
    password: string
}) {
    return post(
        '/user/login',
        data
    )
}