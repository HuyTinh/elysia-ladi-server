import * as elements from 'typed-html'
import { IProduct } from '../../../../types/product.type'

/**
 *
 *
 * @param {{ product: IProduct }} { product }
 * @return {*}  {JSX.Element}
 */
export const ViewProductForm = ({ product }: { product: IProduct }): JSX.Element => {
    return (

        <div hx-trigger="revealed" hx-swap="innerHTML">
            <div class="divider">
                <span class="font-bold text-xl">
                    View Product
                </span>
            </div>
            <div class="grid grid-cols-3 gap-x-2">
                <div class="rounded-lg overflow-auto">
                    <img src={product.thumbnail} class="h-full" alt="" />
                </div>
                <div class="space-y-2 col-span-2">
                    <div>
                        <div>
                            Name:
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            class="input input-bordered rounded input-sm w-full"
                            readonly
                            value={product.name}
                        />
                    </div>
                    <div>
                        <div>
                            Lore:
                        </div>
                        <textarea class="textarea-bordered w-full p-2" placeholder="Bio"
                            readonly>
                            {product.lore}
                        </textarea>

                    </div>
                    <div>
                        <div>
                            Description:
                        </div>
                        <textarea class="textarea-bordered w-full p-2" rows='5' placeholder="Bio" readonly
                        >
                            {product.description}
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

