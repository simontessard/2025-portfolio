import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/global/Header/Header";
import {AnimatePresence} from "framer-motion";
import Scroll from "@/components/utils/Scroll";
import CustomCursor from "@/components/utils/CustomCursor";
import {useLocaleStore} from "@/store/useLocaleStore";
import {NextIntlClientProvider} from "next-intl";
import { poppins, fraunces, montreal, editorial } from "@/styles/fonts";

import frProjectsMessages from '@/i18n/locales/projects.fr.json';
import enProjectsMessages from '@/i18n/locales/projects.en.json';
import frAboutMessages from '@/i18n/locales/about.fr.json';
import enAboutMessages from '@/i18n/locales/about.en.json';

import frGlobalMessages from '@/i18n/locales/global.fr.json';
import enGlobalMessages from '@/i18n/locales/global.en.json';

type AbstractMessages = {
    [key: string]: string | AbstractMessages;
};

const messages = {
    fr: {
        ...frProjectsMessages,
        ...frGlobalMessages,
        ...frAboutMessages
    } as unknown as AbstractMessages,
    en: {
        ...enProjectsMessages,
        ...enGlobalMessages,
        ...enAboutMessages
    } as unknown as AbstractMessages,
};

export default function App({ Component, pageProps, router }: AppProps) {
  const locale = useLocaleStore((state) => state.locale);

  const OnExitComplete = () => {
        window.scrollTo({ top: 0 });
  };

  return (
      <NextIntlClientProvider locale={locale} messages={messages[locale as keyof typeof messages]}>
          <div className={`${poppins.variable} ${fraunces.variable} ${montreal.variable} ${editorial.variable}`}>
              <CustomCursor/>
              <Scroll>
                  <Header/>
                  <AnimatePresence mode='wait' onExitComplete={OnExitComplete}>
                      <Component key={router.route} {...pageProps} />
                  </AnimatePresence>
              </Scroll>
          </div>
      </NextIntlClientProvider>
  )
}
