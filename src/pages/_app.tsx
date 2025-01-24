import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/global/Header/Header";
import {Merriweather} from "next/font/google";
import {Fira_Sans} from "next/font/google";
import {AnimatePresence} from "framer-motion";
import Scroll from "@/components/utils/Scroll";
import localFont from 'next/font/local'
import CustomCursor from "@/components/utils/CustomCursor";

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

const montreal = localFont({ src: './../../public/fonts/pp-neue-montreal/ppneuemontreal-medium.otf', variable: '--font-montreal' })
const editorial = localFont({ src: './../../public/fonts/pp-edito.otf', variable: '--font-editorial' })

export default function App({ Component, pageProps, router }: AppProps) {
  const OnExitComplete = () => {
        window.scrollTo({ top: 0 });
  };

  return (
      <div className={`${poppins.variable} ${fraunces.variable} ${montreal.variable} ${editorial.variable}`}>
          <CustomCursor/>
          <Scroll>
              <Header/>
              <AnimatePresence mode='wait' onExitComplete={OnExitComplete}>
                  <Component key={router.route} {...pageProps} />
              </AnimatePresence>
          </Scroll>
      </div>
  )
}
