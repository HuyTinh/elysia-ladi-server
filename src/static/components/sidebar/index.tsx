import * as elements from "typed-html"
import { SideMenuItem } from "./controller"

export const SideBar = ({ content }: { content?: any }) => {
    return (
        <div>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar" aria-hidden="true">
                <div class="h-full px-3 py-4 overflow-y-auto bg-[#2c52b3] ">
                    <ul class="space-y-2 font-medium">
                        {
                            SideMenuItem.map(mnItem =>
                                <li class="cursor-pointer">
                                    <a hx-post={mnItem.path}
                                        hx-trigger="click"
                                        hx-target="#content"
                                        hx-indicator="#loader"
                                        hx-push-url={mnItem.path} class="flex items-center p-2 rounded-lg text-white hover:bg-white group">
                                        <span class="text-white transition duration-75  group-hover:text-[#fb2f38]" >
                                            {mnItem.icon}
                                        </span>
                                        <span class="ms-3 group-hover:text-[#dfd859]">{mnItem.label}</span>
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </aside>

            <div class="sm:ml-64 h-full">
                <div class="h-full relative">
                    {/* {content} */}
                    <div id="content"></div>
                    <div id="loader" class="h-full htmx-indicator">
                        <div class="left-0 absolute top-0 bg-black/55 w-full flex justify-center h-full">
                            <span class="loading loading-spinner text-white loading-lg"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
