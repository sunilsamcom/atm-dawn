This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Storybook

You may test components using storybook, to start:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to open storybook.

### Prerequisities:

- Must install storybook dependencies via `npm install`
- Tested working on Node 16

## Running Tests

### Jest: Unit Tests

To run Jest unit tests uses:

```bash
npm run test
```

This will start and preserve a watch session that will run unit tests for all files affected by any changes made throughout the development of the application.

### Cypress: End-to-End (E2E) and Integration Testing

To run Cypress tests use:

```bash
npm run cypress
```

> :warning:
>
> 1. Cypress tests require the application to be running first.
> 2. E2E tests require a production application build to be available (via `npm run build`)

There are a set of command script variations in `npm run <SCRIPT>`, which are as follows:

- `cypress` - Runs the Cypress tests in browser. Requires UI.
- `cypress:headless` - Runs Cypress tests in CLI.
- `e2e` OR `test` - Runs E2E tests in browser. Requires UI.
- `e2e:headless` - Runs E2E tests in CLI.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Frameworks and Libraries Documentation

- [Next.js](https://nextjs.org/docs)
  - [NextAuth.js](https://next-auth.js.org/getting-started/introduction)
- [React](https://reactjs.org/docs/getting-started.html)
  - [~~React Hook Form~~](https://react-hook-form.com/get-started)
- [~~RxJS~~](https://rxjs.dev/guide/overview)
- [TypeScript](https://www.typescriptlang.org/docs/)
  - [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)

## Linting

- [ESLint](https://eslint.org/)
  - [~~NPM - eslint-plugin-react-hooks~~](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [Stylelint.io](https://stylelint.io/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
