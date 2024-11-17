import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/global/Header";
import {Merriweather} from "next/font/google";
import {Fira_Sans} from "next/font/google";
import {AnimatePresence} from "framer-motion";

const poppins = Fira_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-poppins",
});

const fraunces = Merriweather({
    subsets: ["latin"],
    weight: ["300","400", "700"],
    variable: "--font-fraunces",
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
      <div className={`${poppins.variable} ${fraunces.variable}`}>
        <Header/>
          <AnimatePresence mode='wait'>
              <Component key={router.route} {...pageProps} />
          </AnimatePresence>
      </div>
  )
}
