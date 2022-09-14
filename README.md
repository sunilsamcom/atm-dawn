This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create a `.env.local` file.

You should use the `.env.local.template` and replace the variables `VOLUUM_USERNAME` and `VOLUUM_PASSWORD` with your Voluum credentials.

This will enable you to perform the sign in on the app.
You can use the Dummy Authentication to create a fake session.

First, install required project dependencies by running

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Storybook

You may view and test components using Storybook, to start:

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

## Internationalization (i18n)

This project supports [Internationalized Routing](https://nextjs.org/docs/advanced-features/i18n-routing) using sub-path routing. Configured locales include English (en), Arabic (ar) and Portuguese (pt).

### Usage

```bash
npm run lingui-extract
```

use `lingui-extract` to update catalogs with new messages. This will generate `.po` files

Output:

```
Catalog statistics for translations/locales/{locale}/messages:
┌─────────────┬─────────────┬─────────┐
│ Language    │ Total count │ Missing │
├─────────────┼─────────────┼─────────┤
│ en (source) │      1      │    -    │
│ ar          │      1      │    1    │
│ pt          │      1      │    1    │
│ pseudo      │      0      │    0    │
└─────────────┴─────────────┴─────────┘
```

`Total count` is the total number of messages that need to be translated.

`Missing` is the number of messages that need to be translated. In this case, there are 1 missing translation for the **Arabic** and **Portuguese** locale.

To update the missing translations, go to `translations/locales/{locale}/messages.po` directory and provide your translation in each directory via `msgstr`.

Note: `msgid` has been generated through `@lingui/macros` along with the `.po` message files

`translations/locales/en/messages.po`

```
#~ msgid "login"
#~ msgstr "Please Login:"
```

`translations/locales/pt/messages.po`

```
#~ msgid "login"
#~ msgstr "Por favor entre:"
```

`translations/locales/ar/messages.po`

```
#~ msgid "login"
#~ msgstr "الرجاء تسجيل الدخول:"
```

Running `npm run lingui-extract` again will produce these results. Now showing that all messages are translated.

Output:

```
Catalog statistics for translations/locales/{locale}/messages:
┌─────────────┬─────────────┬─────────┐
│ Language    │ Total count │ Missing │
├─────────────┼─────────────┼─────────┤
│ en (source) │      1      │    -    │
│ ar          │      1      │    0    │
│ pt          │      1      │    0    │
│ pseudo      │      0      │    0    │
└─────────────┴─────────────┴─────────┘
```

--

```bash
npm run lingui-compile
```

use `lingui-compile` to compile catalogs for production. This will generate `.js` files

Also, language data (pluralizations) are written to the message catalog as well.

Developer Note: Do not push/include `.js` files to source control.

### How to add another locale/language

For this example we are going to add the locale for **Portuguese** with locale code `pt`

1. First, edit your `next.config.js` file to include the locale you want to add under i18n.
   ```js
   const nextConfig = {
     ...
     i18n: {
       locales: ["en", "ar", "pt", "pseudo"],
       defaultLocale: "en",
     },
   };
   ```
2. Update `loadLocaleData` in `utils/i18n.ts` file
   ```js
   export function initTranslation(i18n: I18n): void {
     i18n.loadLocaleData({
       en: { plurals: en },
       ar: { plurals: ar },
       pt: { plurals: pt },
       pseudo: { plurals: en },
     });
   }
   ```
3. Add the locale in `lingui.config.js` file
   ```js
   module.exports = {
       locales: ["en", "ar", "pt", "pseudo"],
       ...
   };
   ```

### How to setup translations

For example, we are going to translate the word "Please Login:"

1. Import the `<Trans>` component from `@lingui/macro`
   ```js
   import { Trans } from "@lingui/macro";
   ```
2. Add the `<Trans>` component in your JSX
   ```js
   <h1 className="text-3xl font-bold underline">
     <Trans>Please Login:</Trans>
   </h1>
   ```
3. Extract the translations so that Lingui can generate the needed `.po` files. Run the command
   ```bash
   npm run lingui-extract
   ```
4. Go to `translations/locales/{locale}` directory. These directories and their files are generated by LinguiJS
5. Provide your translation in the `messages.po` file of each locale:

   `translations/locales/en/messages.po`

   ```
   #~ msgid "login"
   #~ msgstr "Please Login:"
   ```

   `translations/locales/pt/messages.po`

   ```
   #~ msgid "login"
   #~ msgstr "Por favor entre:"
   ```

6. Go to your page where you placed your translation. Since this is configured using sub-path routing, we can test the translations like this:

   - `localhost:3000/` - default locale (english)
   - `localhost:3000/en` - english locale subpath
   - `localhost:3000/pt` - portuguese locale subpath

   You can also set your browser's default language to automatically route the appropriate locale.

7. Lastly, don't forget to export getStaticProps from `@app/configs/i18n/getStaticProps`
   ```js
   export { getStaticProps } from "@app/config/i18n/getStaticProps";
   ```

### Translations with variables

Given the page

```js
import { Trans } from '@lingui/macro'

let name = "Nick";

return (
    <>
      <p><Trans>Hello {name}</Trans></p>
      ...
    </>
  );
...
```

We run `npm run lingui-extract` and we update the generated `.po` file in each locale folder under translations:

Portuguese - `translations/locales/pt/messages.po`

```
#~ msgid "Hello, {name}"
#~ msgstr "Olá, {name}"
```

Arabic - `translations/locales/ar/messages.po`

```
#~ msgid "Hello, {name}"
#~ msgstr "مرحبًا, {name}"
```

English - http://localhost:3000/
<img width="264" alt="image" src="https://user-images.githubusercontent.com/17807945/189845583-758b7ad4-a464-4203-86c9-69d8c000c98a.png">

Arabic - http://localhost:3000/ar
<img width="317" alt="image" src="https://user-images.githubusercontent.com/17807945/189845714-c3a48015-b4f6-43d8-95da-17eb9c18de42.png">

Arabic - http://localhost:3000/pt
<img width="289" alt="image" src="https://user-images.githubusercontent.com/17807945/189845791-5c723815-19bb-459e-8ab9-b39412a84b03.png">

For more examples and use cases: [Lingui API Reference](https://lingui.js.org/ref/react.html)

### Prerequisities:

- Must install i18n related dependencies via `npm install`
- Tested working on Node 16

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
- [LinguiJS](https://lingui.js.org/index.html)

## Linting

- [ESLint](https://eslint.org/)
  - [~~NPM - eslint-plugin-react-hooks~~](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [Stylelint.io](https://stylelint.io/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
