import { Elysia } from "elysia";
import apiServer from "./api/api.server";
import ssrServer from "./ssr/ssr.server";
import { loggerMiddleware } from "./api/api.middleware";

export const app = new Elysia()

app
  .use(loggerMiddleware)
  .use(apiServer)
  .use(ssrServer)
  .listen(3000)


