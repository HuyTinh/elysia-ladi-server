import * as elements from "typed-html"
import { IProduct } from "../../../../types/product.type";
import { EditModal } from "../modal/edit-modal";
import { ViewModal } from "../modal/view-modal";
import { CreateModal } from "../modal/create-modal";

/**
 *
 *
 * @param {{ products?: IProduct[] }} { products }
 * @return {*}  {JSX.Element}
 */
export const ManageProductTable = ({ products }: { products?: IProduct[] }): JSX.Element => {
    return (
        <div class="overflow-x-auto border-2 border-gray-600 rounded-lg">
            <table class="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((val, index) =>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle h-16 w-16">
                                            <img
                                                src={val.thumbnail}
                                                alt="Avatar Tailwind CSS Component"
                                                loading="lazy"
                                            />

                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">{val.name}</div>
                                        <div class="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <th>
                                <label
                                    hx-get={`/manage-product/${val.slug}/view`}
                                    hx-target="#view_form"
                                    class="btn btn-info btn-sm rounded-lg" for="view_product_modal"
                                    aria-label="view">
                                    <i class="fa-solid fa-eye text-white"></i>
                                </label>

                                <label
                                    hx-get={`/manage-product/${val.slug}/edit`}
                                    hx-target="#edit_form"
                                    class="btn btn-info btn-sm rounded-lg" for="edit_product_modal"
                                    aria-label="edit">
                                    <i class="fa-solid fa-pen-to-square text-white"></i>
                                </label>
                            </th>
                        </tr>
                    )}
                </tbody>
            </table>


            <ViewModal />
            <CreateModal />
            <EditModal />
        </div>
    )
}
