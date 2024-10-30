import * as elements from "typed-html"
/**
 *
 *
 * @return {*}  {JSX.Element}
 */
export const EditModal = (): JSX.Element => {
    return (
        <div>
            <input type="checkbox" id="edit_product_modal" class="modal-toggle" />
            <div class="modal duration-500 delay-[250ms]" role="dialog">
                <div class="modal-box" id="edit_form">
                </div>
                <label class="modal-backdrop" for="edit_product_modal">Close</label>
            </div>
        </div>
    )
}
