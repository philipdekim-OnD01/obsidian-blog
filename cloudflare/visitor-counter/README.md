# Obsidian Blog Visitor Counter

Cloudflare Worker + D1 visitor counter for the GitHub Pages blog.

## Setup

```sh
cd cloudflare/visitor-counter
npx wrangler d1 create obsidian_blog_visitors
```

Copy the returned `database_id` into `wrangler.toml`.

```sh
npx wrangler d1 execute obsidian_blog_visitors --remote --file=./schema.sql
npx wrangler d1 execute obsidian_blog_visitors --remote --file=./seed.sql
npx wrangler deploy
```

After deployment, copy the Worker URL into:

- `assets/visitor-config.js`
- GitHub repository secret `VISITOR_API_BASE_URL`

Example:

```js
window.VISITOR_API_BASE_URL = 'https://obsidian-blog-visitor-counter.navigation01.workers.dev';
```
