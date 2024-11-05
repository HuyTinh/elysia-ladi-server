import * as elements from 'typed-html'
import * as _ from 'hyperscript'

/**
 *
 *
 * @return {*}  {JSX.Element}
 */
export const CreateProductForm = (): JSX.Element => {
    return (
        <div hx-trigger="revealed" hx-swap="innerHTML">
            <form id="book-form"
                hx-post="/manage-product/create">
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
                            name='name'
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
                            name='slug'
                        />
                    </div>
                    <div>
                        <div>
                            Lore:
                        </div>
                        <textarea class="textarea-bordered w-full p-2" placeholder="Lore" name='lore'
                        >
                        </textarea>

                    </div>
                    <div>
                        <div>
                            Description:
                        </div>
                        <textarea class="textarea-bordered w-full p-2" rows='5' placeholder="Description" name='description'
                        >
                        </textarea>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

