This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Next.js GitHub Pages

Deploy Next.js to GitHub Pages with GitHub Actions. [View the deployed app](https://gregrickaby.github.io/nextjs-github-pages/) 🚀

> ⚠️ Heads up! GitHub Pages _does not_ support serverless or edge functions. This means dynamic functionality will be disabled. See all the [unsupported features](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#unsupported-features).

---

## Configure Next.js

### Next.js Config

First, you need to configure Next.js to [deploy static exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports). This is required for GitHub Pages to work.

1. Open the `next.config.ts` file
2. Add the following:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/nextjs-github-pages",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

3. Save the `next.config.ts`

4. Finally, place a `.nojekyll` file in the `/public` directory to disable GitHub Pages from trying to create a [Jekyll](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/) website.

```treeview
.
├── app/
├── public/
│   └── .nojekyll
├── next.config.ts
```

Perfect! This is all you need to configure Next.js to deploy on GitHub Pages.

### Add base path to `page.tsx`

Next, you will need to add the base path to images in `page.tsx` file. This is required for the images to appear on GitHub Pages.

1. Open `app/page.tsx`
2. Find the `Image` components
3. Add `/nextjs-github-pages/` (or the slug of your GitHub repository) to the `src` prop:

```tsx
<Image
  src="/nextjs-github-pages/vercel.svg"
  alt="Vercel Logo"
  className={styles.vercelLogo}
  width={100}
  height={24}
  priority
/>
```

4. Save the `page.tsx` file

Learn more by reading the official documentation [for basePath and images](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath#images).

---

## Configure GitHub Repository

Now that Next.js is configured, you need to set up your GitHub repository to deploy to GitHub Pages.

### Setup GitHub Action

This is where the magic happens! This [workflow file](https://github.com/gregrickaby/nextjs-github-pages/blob/main/.github/workflows/deploy.yml) will automatically build and deploy the app when you push to the `main` branch.

1. Create `.github/workflows/deploy.yml` file
2. Paste the contents of <https://github.com/gregrickaby/nextjs-github-pages/blob/main/.github/workflows/deploy.yml>
3. Save the `deploy.yml` file

### Enable GitHub Pages

1. Go to your repository's **Settings** tab
2. Click "Pages" in the sidebar
3. Under "Build and Deployment", select "GitHub Actions" as the source:

![screenshot of github pages settings](https://dl.dropboxusercontent.com/s/vf74zv2wcepnt9w/Screenshot%202025-02-03%20at%2021.10.06.png?dl=0)

### Push to GitHub

Now that everything is configured, you can commit your code and push to GitHub. This will trigger the GitHub Action workflow and deploy your app to GitHub Pages.

```bash
git add . && git commit -m "initial commit" && git push
```

You should see your site deployed to GitHub Pages in a few minutes. 🚀

---

## Wrap up

Thanks for reading and I hope this helps. If you noticed someting wrong, please [open an issue](https://github.com/gregrickaby/nextjs-github-pages/issues). Cheers! 🍻

---