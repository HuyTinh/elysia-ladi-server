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
import { ViewProductForm } from "./pages/manage-product/form/view-form";
import { CreateProductForm } from "./pages/manage-product/form/create-form";
import { log } from "console";

const htmlContent = await readFile
    (join(dirname(dirname(__dirname)), 'index.html'), 'utf8')

const $ = cheerio.load(htmlContent);

export default new Elysia()
    .use(html())
    .use(compression())
    .onBeforeHandle(({ request }) => {
        switch (request.method) {
            case "GET":
                $('#root').html(<App /> as any);
                return;
        }
    })
    .onAfterHandle(({ params, request, response, html }) => {
        switch (request.method) {
            case "GET":
                if (!params && !request.url.includes("create")) {
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
        const APIResponse = await ProductService.findAll()
        return <ManageProductPage products={APIResponse.data as IProduct[]} />
    })
    .get("/manage-product/:slug/view", async (ctx) => {
        const APIResponse = await ProductService.findBySlug(ctx.params.slug)
        return <ViewProductForm product={APIResponse.data as IProduct} />
    })
    .get("/manage-product/:slug/edit", async (ctx) => {
        const APIResponse = await ProductService.findBySlug(ctx.params.slug)
        return <EditProductForm product={APIResponse.data as IProduct} />
    })
    .put("/manage-product/:slug/edit", async (ctx) => {
        const updateProduct: IProduct = ctx.body as IProduct

        const APIResponse = await ProductService.updateProduct(updateProduct.id, updateProduct)

        return <EditProductForm product={APIResponse.data as IProduct} />
    })
    .get("/manage-product/create", () => {
        return <CreateProductForm />
    })