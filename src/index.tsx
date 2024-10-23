import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import { BaseHTML } from "./static/layout";

import * as elements from "typed-html"
import { ProductService } from "./services/product.service";

const app = new Elysia().
  use(html())
  .get('/data', async ({ response }) => {
    return await ProductService.findAll()
  })
  .get("/", ({ html }) => html(
    <BaseHTML>
      {/* <body>
        <button hx-post="/clicked"
          hx-swap="outerHTML">Click me!</button>
      </body> */}
    </BaseHTML>))
  .post("/clicked", () => <div>I'm from the server!</div>)
  .listen(3000);




