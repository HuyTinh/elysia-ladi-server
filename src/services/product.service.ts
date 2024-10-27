import { FirebaseClient } from "../config/firebase/firebase-client";
import { APIResponse } from "../response/api-response";
import { IAPIResponse } from "../types/api-response.type";
;
import { IProduct } from "../types/product.type";

const productClient = new FirebaseClient<IProduct>('products')

export const ProductService = {

    /**
     * 
     * @returns 
     */
    findAll: async (): Promise<IAPIResponse<IProduct[]>> => {
        const data: IProduct[] = await productClient.findAll() as IProduct[]
        return APIResponse({ data }) as IAPIResponse<IProduct[]>
    },

    /**
     * 
     * @param id 
     * @returns 
     */
    findById: async (id: string): Promise<IAPIResponse<IProduct>> => {
        const data: IProduct = await productClient.findById(id) as IProduct
        return APIResponse({ data }) as IAPIResponse<IProduct>
    },

    /**
     * 
     * @param slug 
     * @returns 
     */
    findBySlug: async (slug: string): Promise<IAPIResponse<IProduct>> => {
        const data: IProduct = await productClient.findBySlug(slug) as IProduct
        return APIResponse({ data }) as IAPIResponse<IProduct>
    },

    /**
     * 
     * @param data 
     * @returns 
     */
    createProduct: async (data: IProduct): Promise<IAPIResponse<void>> => {
        let message = "Create product successful!"
        await productClient.create(data).catch(() => {
            message = "Create product fail!"
        })
        return APIResponse({ message }) as IAPIResponse<void>;
    },

    /**
     * 
     * @param id 
     * @param data 
     */
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