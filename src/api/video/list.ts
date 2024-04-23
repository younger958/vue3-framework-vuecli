import { get } from "@/utils/request";

export function list() {
    return get(
        '/file',
        null
    )
}