import * as elements from 'typed-html'
import { IProduct } from '../../../../types/product.type'

/**
 *
 *
 * @param {{ product: IProduct }} { product }
 * @return {*}  {JSX.Element}
 */
export const EditProductForm = ({ product }: { product: IProduct }): JSX.Element => {

    return (
        <div hx-trigger="revealed" hx-swap="innerHTML">
            <div class="divider">
                <span class="font-bold text-xl">
                    Edit Product
                </span>
            </div>
            <form hx-put={`/manage-product/${product.slug}/edit`}>
                <input
                    type="text"
                    placeholder="Type here"
                    class="hidden"
                    name='id'
                    value={product.id}
                />
                <div class="space-y-2">
                    <div>
                        <div>
                            Name:
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            class="input input-bordered rounded input-sm w-full"
                            name='name'
                            value={product.name}
                        />
                    </div>
                    <div>
                        <div>
                            Slug:
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            class="input input-bordered rounded input-sm w-full"
                            name='slug'
                            value={product.slug}
                        />
                    </div>
                    <div>
                        <div>
                            Lore:
                        </div>
                        <textarea class="textarea-bordered w-full p-2" placeholder="Bio"
                            name='lore'
                        >
                            {product.lore}
                        </textarea>

                    </div>
                    <div>
                        <div>
                            Description:
                        </div>
                        <textarea class="textarea-bordered w-full p-2" rows='5' placeholder="Bio" name='description'
                        >
                            {product.description}
                        </textarea>

                    </div>
                </div>
                <button

                    class="btn">Submit</button>
            </form>
        </div>
    )
}

