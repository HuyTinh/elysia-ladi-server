import { IProduct } from "../types/product.type"

export interface APIResponse<T> {
    code?: number,
    message?: string,
    data?: T | null
}

export const APIResponse = ({ code, message, data }: APIResponse<IProduct | IProduct[] | null>): APIResponse<IProduct | IProduct[]> => {
    return {
        code: code || 1000,
        message,
        data
    }
}