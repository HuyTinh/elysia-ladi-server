import * as elements from 'typed-html'
import { ManageProductTable } from './table'
import { IProduct } from '../../../types/product.type'


export const ManageProductPage = ({ products }: { products: IProduct[] }) => {
    return (
        <div>
            <ManageProductTable products={products} />
        </div>
    )
}

