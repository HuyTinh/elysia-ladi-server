import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import { BaseHTML } from "./static/layout";

import * as elements from "typed-html"

const app = new Elysia().
  use(html())
  .get("/", ({ html }) => html(
    <BaseHTML>
      <body>
        <button hx-post="/clicked"
          hx-swap="outerHTML">Click me!</button>
      </body>
    </BaseHTML>))
  .post("/clicked", () => <div>I'm from the server!</div>)
  .listen(3000);

console.log(`Server starting on http://${app.server?.hostname}:${app.server?.port}`)
