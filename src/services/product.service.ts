import { FirebaseClient } from "../config/firebase/firebase-client";
import { APIResponse } from "../constant/api-response";
import { IProduct } from "../types/product.type";

const productClient = new FirebaseClient<IProduct>('products')


export const ProductService = {
    findAll: async (): Promise<APIResponse<IProduct[]>> => {
        const data: IProduct[] = await productClient.findAll() as IProduct[]
        return APIResponse({ data }) as APIResponse<IProduct[]>
    },
    createProduct: async (data: IProduct) => {
        await productClient.create(data).then(() => {
            return APIResponse({ message: "Create product successful!" })
        }).catch(() => {
            return APIResponse({ message: "Create product fail!" })
        })
    }

}