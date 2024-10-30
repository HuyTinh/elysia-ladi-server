type SideMenuItemType = {
    icon: JSX.Element;
    label: string
    path: string
}

/** @type {*} */
export const SideMenuItem: SideMenuItemType[] = [

    {
        icon: `<i class="fa-solid fa-chart-pie" > </i>`,
        label: "Dashboard",
        path: "/"
    },
    {
        icon: `<i class="fa-solid fa-bag-shopping"></i>`,
        label: "Products",
        path: "/manage-product"
    }
]