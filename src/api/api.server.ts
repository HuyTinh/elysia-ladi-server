import Elysia from "elysia";
import { ProductService } from "./services/product/product.service";

export default new Elysia({
    prefix: '/api/v1',
})
    .get("/products", async () => {
        return await ProductService.findAll()
    })
    .get("/products/:slug/slug", async (ctx) => {
        const { slug } = ctx.params

        return await ProductService.findBySlug(slug)
    })
