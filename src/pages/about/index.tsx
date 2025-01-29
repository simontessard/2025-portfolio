import Curve from "@/components/utils/Curve";
import PageTitle from "@/components/global/PageTitle";
import Footer from "@/components/global/Footer/Footer";
import Experience from "@/components/about/Experience";
import Intro from "@/components/about/Intro";
import InfiniteCarousel from "@/components/about/InfiniteCarousel";
import Head from "next/head";
import Tools from "@/components/about/Tools";
import Expertises from "@/components/about/Expertises";
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('about');

    const meta = {
        title: t('meta.title')
    };

    const content = {
        title: {
            main: t('title.main'),
            second: t('title.second')
        }
    };

    return (
        <Curve>
            <Head>
                <title>{meta.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <section className="bg-white pt-28 md:pt-32">
                <PageTitle
                    title={content.title.main}
                    secondWords={content.title.second}
                    className="px-4 md:px-6 mb-6 md:mb-8"
                />
                <InfiniteCarousel/>
                <div className="px-4 md:px-6">
                    <Intro/>
                    <Expertises/>
                    <Experience/>
                    <Tools/>
                </div>
            </section>
            <Footer/>
        </Curve>
    );
}