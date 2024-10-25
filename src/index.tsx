import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import * as elements from "typed-html"
import { ManageProductPage } from "./static/pages/manage-product";
import { BaseHTML } from "./static/layout";
import { DashboardPage } from "./static/pages/dasboard";
import { ProductService } from "./services/product.service";
import { IProduct } from "./types/product.type";

const app = new Elysia().
  use(html())
  .onAfterHandle(({ response, html }) => {
    return html(
      <BaseHTML>
        <body>
          {response}
        </body>
      </BaseHTML>
    )
  })
  .get("/", () => <DashboardPage />)
  .get("/manage-product", async () => {

    const products = await ProductService.findAll()
    return <ManageProductPage products={products.data as IProduct[]} />
  })
  .listen(3000, ({ hostname, port }) =>
    console.log(`Server starting on http://${hostname}:${port}`)
  );


