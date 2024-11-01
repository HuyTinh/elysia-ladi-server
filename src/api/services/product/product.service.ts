import { cache } from "../../../config/cache/cache-setup";
import { FirebaseClient } from "../../../config/firebase/firebase-client";
import { APIResponse } from "../../../response/api-response";
import { IAPIResponse } from "../../../types/api-response.type";
import { IProduct } from "../../../types/product.type";

const productClient = new FirebaseClient<IProduct>('products')

export const ProductService = {

    /**
     * 
     * @returns 
     */
    findAll: async (): Promise<IAPIResponse<IProduct[]>> => {
        let data: IProduct[] = cache.get("products") as IProduct[]

        if (!data) {
            data = await productClient.findAll() as IProduct[]
        }

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
        let data: IProduct = (cache.get("products") as IProduct[])
            ?.find(val => val.slug === slug) as IProduct

        if (!data) {
            data = await productClient.findBySlug(slug) as IProduct
        }

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
     *
     * @param {string} id
     * @param {IProduct} data
     */
    updateProduct: async (id: string, data: IProduct): Promise<IAPIResponse<IProduct>> => {
        await productClient.update(id, data).catch(() => {
            return APIResponse({ message: "Update product fail!" }) as IAPIResponse<IProduct>;
        })

        const dataResponse: IProduct = await productClient.findById(id) as IProduct
        return APIResponse({ data }) as IAPIResponse<IProduct>
    },

    /**
     *
     *
     * @param {string} id
     */
    deleteProduct: async (id: string) => {

        await productClient.delete(id).then(() => {
            return APIResponse({ message: "Update product successful!" })
        }).catch(() => {
            return APIResponse({ message: "Update product fail!" })
        })
    }

}