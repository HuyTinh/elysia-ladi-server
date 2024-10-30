import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import * as elements from "typed-html"
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import * as cheerio from "cheerio"
import { compression } from 'elysia-compression'
import 'dotenv/config'
import { App } from "./app";
import { DashboardPage } from "./pages/dasboard";
import { ProductService } from "../api/services/product/product.service";
import { ManageProductPage } from "./pages/manage-product";
import { IProduct } from "../types/product.type";
import { EditProductForm } from "./pages/manage-product/form/edit-form";

const htmlContent = await readFile
    (join(dirname(dirname(__dirname)), 'index.html'), 'utf8')

const $ = cheerio.load(htmlContent);

export default new Elysia()
    .use(html())
    .use(compression())
    .get("/products", async () => {
    }).onBeforeHandle(({ request }) => {
        switch (request.method) {
            case "GET":
                $('#root').html(<App /> as any);
                return;
        }
    })
    .onAfterHandle(({ params, request, response, html }) => {
        switch (request.method) {
            case "GET":
                if (!params) {
                    $('#content').html(response);
                    return html($.html())
                } else {
                    return html(response)
                }
            default:
                return html(response)
        }
    })
    .all("/", async () => {
        return <DashboardPage />
    }).all("/manage-product", async () => {
        const products = await ProductService.findAll()
        return <ManageProductPage products={products.data as IProduct[]} />
    })
    .get("/manage-product/:slug/edit", async (ctx) => {
        const product = await ProductService.findBySlug(ctx.params.slug)
        return <EditProductForm product={product.data as IProduct} />
    })