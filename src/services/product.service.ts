import { FirebaseClient } from "../config/firebase/firebase-client";
import { APIResponse } from "../response/api-response";
import { IProduct } from "../types/product.type";

const productClient = new FirebaseClient<IProduct>('products')

export const ProductService = {
    findAll: async (): Promise<APIResponse<IProduct[]>> => {
        const data: IProduct[] = await productClient.findAll() as IProduct[]
        return APIResponse({ data }) as APIResponse<IProduct[]>
    },
    findById: async (id: string): Promise<APIResponse<IProduct>> => {
        const data: IProduct = await productClient.findById(id) as IProduct
        return APIResponse({ data }) as APIResponse<IProduct>
    },
    findBySlug: async (slug: string): Promise<APIResponse<IProduct>> => {
        const data: IProduct = await productClient.findBySlug(slug) as IProduct
        return APIResponse({ data }) as APIResponse<IProduct>
    },
    createProduct: async (data: IProduct): Promise<APIResponse<void>> => {
        let message = "Create product successful!"
        await productClient.create(data).catch(() => {
            message = "Create product fail!"
        })
        return APIResponse({ message }) as APIResponse<void>;
    },
    updateProduct: async (id: string, data: IProduct) => {
        await productClient.update(id, data).then(() => {
            return APIResponse({ message: "Update product successful!" })
        }).catch(() => {
            return APIResponse({ message: "Update product fail!" })
        })
    },
    deleteProduct: async (id: string) => {
        await productClient.delete(id).then(() => {
            return APIResponse({ message: "Update product successful!" })
        }).catch(() => {
            return APIResponse({ message: "Update product fail!" })
        })
    }

}