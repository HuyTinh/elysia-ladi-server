import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import { BaseHTML } from "../static/layout";

import * as elements from "typed-html"
import { db } from "./config/firebase/firebase.config";

const app = new Elysia().
  use(html())
  .get('/data', async () => {
    const ref = db.ref('products'); // Đường dẫn đến node 'users'
    try {
      const snapshot = await ref.once('value'); // Lấy dữ liệu một lần
      if (snapshot.exists()) {
        const users = snapshot.val(); // Lấy giá trị của snapshot
        console.log('All products:', users); // In ra tất cả người dùng
      } else {
        console.log('No products found');
      }
    } catch (error) {
      console.error('Error retrieving products:', error);
    }
  })
  .get("/", ({ html }) => html(
    <BaseHTML>
      <body>
        <button hx-post="/clicked"
          hx-swap="outerHTML">Click me!</button>
      </body>
    </BaseHTML>))
  .post("/clicked", () => <div>I'm from the server!</div>)
  .listen(3000);




