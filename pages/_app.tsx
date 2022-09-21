import React, { useRef } from "react";
import "@app/styles/global.css";
import { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { initTranslation } from "utils/i18n";

import { Page } from "@app/types/page";
import { useRouter } from "next/router";
export default MyApp;

type Props = AppProps & {
  Component: Page;
};

// Initialize i18n
initTranslation(i18n);

function MyApp({ Component, pageProps }: Props) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;
  const firstRender = useRef(true);

  if (pageProps.translation && firstRender.current) {
    //load the translations for the locale
    i18n.load(locale, pageProps.translation);
    i18n.activate(locale);
    // render only once
    firstRender.current = false;
  }

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
        {getLayout(<Component {...pageProps} />)}
      </I18nProvider>
    </SessionProvider>
  );
}
