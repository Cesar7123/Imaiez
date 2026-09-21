# Imaiez
Photographer web page

## SEO and Cloudinary

Copy `.env.example` to your deployment environment and set `NEXT_PUBLIC_SITE_URL` to the canonical production URL. Cloudinary image tags become normalized `categories` in the portfolio API and category routes. Add `caption` and `alt` context metadata to Cloudinary uploads for titles and accessible descriptions.

Public discovery endpoints:

- `/sitemap.xml`
- `/robots.txt`
- `/llms.txt`
- `/llms-full.txt`
- `/api/cloudinary?category=food`
