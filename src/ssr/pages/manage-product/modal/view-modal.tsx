import * as elements from "typed-html"
/**
 *
 *
 * @return {*}  {JSX.Element}
 */
export const ViewModal = (): JSX.Element => {
    return (
        <div>
            <input type="checkbox" id="view_product_modal" class="modal-toggle" />
            <div class="modal duration-75" role="dialog">
                <div class="modal-box max-w-5xl" id="view_form">
                </div>
                <label class="modal-backdrop" for="view_product_modal">Close</label>
            </div>
        </div>
    )
}
