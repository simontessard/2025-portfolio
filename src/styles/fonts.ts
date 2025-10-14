import { Merriweather, Fira_Sans } from "next/font/google";
import localFont from 'next/font/local';

export const poppins = Fira_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-poppins",
});

export const fraunces = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-fraunces",
});

export const montreal = localFont({
    src: '../../public/fonts/pp-neue-montreal/ppneuemontreal-medium.otf',
    variable: '--font-montreal'
});

export const editorial = localFont({
    src: '../../public/fonts/pp-edito.otf',
    variable: '--font-editorial'
});