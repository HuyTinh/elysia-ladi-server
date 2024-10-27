import { IAPIResponse } from "../types/api-response.type"
import { IProduct } from "../types/product.type"

/**
 * 
 * @param param0 
 * @returns 
 */
export const APIResponse = ({ code, message, data }: IAPIResponse<IProduct | IProduct[] | null>): IAPIResponse<IProduct | IProduct[]> => {

    return {
        code: code || 1000,
        message,
        data
    }
}