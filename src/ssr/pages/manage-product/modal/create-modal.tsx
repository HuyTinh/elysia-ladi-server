import * as elements from "typed-html"
/**
 *
 *
 * @return {*}  {JSX.Element}
 */
export const CreateModal = (): JSX.Element => {
    return (

        <div>
            <input type="checkbox" id="create_product_modal" class="modal-toggle" />
            <div class="modal duration-500 delay-[250ms]" role="dialog">
                <div class="modal-box" id="create_form">
                </div>
                <label class="modal-backdrop" for="create_product_modal">Close</label>
            </div>
        </div>
    )
}
