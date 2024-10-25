import * as elements from 'typed-html'
import { Navbar } from '../components/navbar'
import { SideBar } from '../components/sidebar'

export const BaseHTML = ({ children }: JSX.HtmlTag) => {
    return (
        `
            <!DOCTYPE html>
            <html lang="en" data-theme="cupcake">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Ladi Server" />
                <link rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/1499/1499993.png">
                <script src="https://cdn.tailwindcss.com"></script>
                <script src="https://unpkg.com/htmx.org@2.0.3" integrity="sha384-0895/pl2MU10Hqc6jd4RvrthNlDiE9U1tWmX7WRESftEDRosgxNsQG/Ze9YMRzHq" crossorigin="anonymous"></script>
                <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.13/dist/full.min.css" rel="stylesheet" type="text/css" />
                <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet" />
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

                <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
                
                
                <style>
                    @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap");

                    * {
                    font-family: "Orbitron", Courier, monospace;
                    }
                </style>

                <title>Ladi Server</title>
            </head>
                ${<SideBar content={children} />}      
            </html>
        `
    )
}
