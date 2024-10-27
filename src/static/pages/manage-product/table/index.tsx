import * as elements from "typed-html"
import { IProduct } from "../../../../types/product.type";
import * as _ from "hyperscript"

export const ManageProductTable = ({ products }: { products?: IProduct[] }) => {

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
                                    hx-get={`/manage-product/${val.slug}`}
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
            {/* <label >open modal</label> */}

            <input type="checkbox" id="edit_product_modal" class="modal-toggle" />
            <div class="modal duration-500 delay-[250ms]" role="dialog">
                <div class="modal-box" id="edit_form">
                </div>
                <label class="modal-backdrop" for="edit_product_modal">Close</label>
            </div>
        </div>
    )
}
