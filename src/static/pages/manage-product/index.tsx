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
            <ManageProductTable products={products} />
        </div>
    )
}

