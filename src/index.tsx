import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import * as elements from "typed-html"
import { ManageProductPage } from "./static/pages/manage-product";
import { DashboardPage } from "./static/pages/dasboard";
import { ProductService } from "./services/product.service";
import { IProduct } from "./types/product.type";
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import * as cheerio from "cheerio"
import { App } from "./static/app";
import { compression } from 'elysia-compression'
import 'dotenv/config'

export const app = new Elysia()

const htmlContent = await readFile
  (join(dirname(__dirname), 'index.html'), 'utf8')

const $ = cheerio.load(htmlContent);

app
  .use(html())
  .use(compression())
  .onBeforeHandle(({ request }) => {
    switch (request.method) {
      case "GET":
        $('#root').html(<App /> as any);
        return;
    }
  })
  .onAfterHandle(({ request, response, html }) => {
    switch (request.method) {
      case "GET":
        $('#content').html(response);
        return html($.html())
      default:
        return html(response)
    }
  })
  .all("/", async () => {
    return <DashboardPage />
  })
  .all("/manage-product", async () => {
    const products = await ProductService.findAll()
    return <ManageProductPage products={products.data as IProduct[]} />;
  })
  .get("/manage-product/:slug", async (ctx) => {
    console.log(ctx.params);
    const products = await ProductService.findAll()
    return <ManageProductPage products={products.data as IProduct[]} />
  })
  .listen(3000, ({ hostname, port }) =>
    console.log(`Server starting on http://${hostname}:${port}`)
  );

