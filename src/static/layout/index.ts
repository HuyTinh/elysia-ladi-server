import * as elements from "typed-html"

export const BaseHTML = ({ children }: elements.Children) => {
    return (
        `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Ladi Server" />
                <script src="https://cdn.tailwindcss.com"></script>
                <script src="https://unpkg.com/htmx.org@2.0.3" integrity="sha384-0895/pl2MU10Hqc6jd4RvrthNlDiE9U1tWmX7WRESftEDRosgxNsQG/Ze9YMRzHq" crossorigin="anonymous"></script>
                <link rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/1499/1499993.png">
                <title>Ladi Server</title>
            </head>
                ${children}
            </html>
        `
    )
}
