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
import { log } from "console";

const app = new Elysia()

const htmlContent = await readFile
  (join(dirname(__dirname), 'index.html'), 'utf8')

const $ = cheerio.load(htmlContent);

app
  .use(html())
  .use(compression())
  .onAfterHandle(({ response, html }) => {
    return html(response)
  })
  .get("/", async () => {
    $('#root').html(<App /> as any);
    return $.html()
  })
  .post("/", async () => {

    return <DashboardPage />
  })
  .get("/manage-product", async () => {
    const products = await ProductService.findAll()

    $('#root').html(<App /> as any);

    $('#content').html(<ManageProductPage products={products.data as IProduct[]} /> as any)
    return $.html()
  })
  .post("/manage-product", async () => {
    const products = await ProductService.findAll()
    return <ManageProductPage products={products.data as IProduct[]} /> as any
  })
  .get("/manage-product/:slug", async (ctx) => {
    const products = await ProductService.findAll()
    console.log(ctx.params);
    return <ManageProductPage products={products.data as IProduct[]} />
  })

  .listen(3000, ({ hostname, port }) =>
    console.log(`Server starting on http://${hostname}:${port}`)
  );


