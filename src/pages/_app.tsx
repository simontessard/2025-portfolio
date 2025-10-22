import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/global/Header/Header";
import {AnimatePresence} from "framer-motion";
import Scroll from "@/components/utils/Scroll";
import CustomCursor from "@/components/utils/CustomCursor";
import {useLocaleStore} from "@/store/useLocaleStore";
import {NextIntlClientProvider} from "next-intl";
import { poppins, fraunces, montreal, editorial } from "@/styles/fonts";

export default function App({ Component, pageProps, router }: AppProps) {
  const locale = useLocaleStore((state) => state.locale);

  const OnExitComplete = () => {
        window.scrollTo({ top: 0 });
  };

  return (
      <NextIntlClientProvider locale={locale}>
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
