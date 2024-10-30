import * as elements from 'typed-html'
import { IProduct } from '../../../types/product.type'
import { ManageProductTable } from './table'
/**
 *
 *
 * @param {{ products: IProduct[] }} { products }
 * @return {*}  {JSX.Element}
 */
export const ManageProductPage = ({ products }: { products: IProduct[] }): JSX.Element => {
    return (
        <div class="p-4 h-screen">
            <div>
                <div class="flex justify-end">
                    <label
                        hx-get={`/manage-product/create`}
                        hx-target="#create_form"
                        class="btn btn-info rounded-lg" for="create_product_modal"
                        aria-label="create">
                        <i class="fa-solid fa-plus text-white"></i>
                    </label>
                </div>
                <ManageProductTable products={products} />
            </div>
        </div >
    )
}

