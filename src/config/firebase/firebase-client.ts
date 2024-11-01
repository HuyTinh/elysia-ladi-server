import { cache } from "../cache/cache-setup";
import { db } from "./firebase-config";

/**
 * 
 */
export class FirebaseClient<T> {

    private path: string;

    /**
     * Creates an instance of FirebaseClient.
     * @param {string} path
     * @memberof FirebaseClient
     */
    constructor(path: string) {
        this.path = path
    }

    /**
     * 
     * @returns 
     */
    async findAll(): Promise<T[] | null> {
        try {
            const snapshot = db.ref(this.path).once('value');
            if ((await snapshot).exists()) {
                const fbResponse = (await snapshot).val()

                const productReponses = Object.keys(fbResponse).map((key: string) => {
                    return { id: key, ...fbResponse[key] }
                })

                cache.set(this.path, productReponses)

                return productReponses;
            } else {
                return [];
            }
        } catch (error) {
            console.error(`Error retrieving ${typeof ({} as T)}: `, error);
            return [];
        }
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: string): Promise<T | null | void> {
        try {
            const snapshot = db.ref(`${this.path}/${id}`).once('value');
            if ((await snapshot).exists()) {
                let fbResponse = (await snapshot).val()

                return Object.keys(fbResponse).map((key: string) => {
                    return { id: key, ...fbResponse[key] }
                })[0]
            } else {
                return {} as T;
            }
        } catch (error) {
            console.error(`Error retrieving ${typeof ({} as T)}: `, error);
            return {} as T;
        }
    }

    /**
     * 
     * @param slug 
     * @returns 
     */
    async findBySlug(slug: string): Promise<T | null | void> {
        try {
            const snapshot = db.ref(`${this.path}`).orderByChild("slug").equalTo(slug).once("value");
            if ((await snapshot).exists()) {
                let fbResponse = (await snapshot).val()

                await this.findAll()

                return Object.keys(fbResponse).map((key: string) => {
                    return { id: key, ...fbResponse[key] }
                })[0]

            } else {
                return {} as T;
            }
        } catch (error) {
            console.error(`Error retrieving ${typeof ({} as T)}: `, error);
            return {} as T;
        }
    }

    /**
     * 
     * @param data 
     */
    async create(data: T): Promise<void> {
        try {
            const newRef = db.ref(this.path).push()
            await newRef.set(data)

            console.log(`${typeof data} created successfully at ${this.path}`);
        } catch (error) {
            console.error(`Error creating ${typeof data}: `, error);
            throw error;
        }
    }

    /**
     * 
     * @param id 
     * @param data 
     */
    async update(id: string, data: Partial<T>): Promise<void> {
        try {
            await db.ref(`${this.path}/${id}`).update(data);
            console.log(`${typeof ({} as T)} updated successfully`);
        } catch (error) {
            console.error(`Error updating ${typeof ({} as T)} id = ${id}: `, error);
            throw error;
        }
    }

    /**
     * 
     * @param id 
     */
    async delete(id: string): Promise<void> {
        try {
            await db.ref(`${this.path}/${id}`).remove();
            console.log(`${typeof ({} as T)} deleted successfully`);
        } catch (error) {
            console.error("Error deleting data:", error);
            throw error;
        }
    }
}
