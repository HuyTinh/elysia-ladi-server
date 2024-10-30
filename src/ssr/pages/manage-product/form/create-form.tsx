import * as elements from 'typed-html'
/**
 *
 *
 * @return {*}  {JSX.Element}
 */
export const CreateProductForm = (): JSX.Element => {
    return (
        <div hx-trigger="revealed" hx-swap="innerHTML">
            <div class="divider">
                <span class="font-bold text-xl">
                    Create Product
                </span>
            </div>
            <div class="space-y-2">
                <div>
                    <div>
                        Name:
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered rounded input-sm w-full"
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
                    />
                </div>
                <div>
                    <div>
                        Lore:
                    </div>
                    <textarea class="textarea-bordered w-full p-2" placeholder="Bio"
                    >
                    </textarea>

                </div>
                <div>
                    <div>
                        Description:
                    </div>
                    <textarea class="textarea-bordered w-full p-2" rows='5' placeholder="Bio"
                    >
                    </textarea>
                </div>
            </div>
        </div>
    )
}

