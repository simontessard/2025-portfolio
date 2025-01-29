import BlogGrid from "@/components/blog/BlogGrid";
import PageTitle from "@/components/global/PageTitle";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import Head from "next/head";
import { useTranslations } from 'next-intl';

export default function BlogPage() {
    const t = useTranslations('blog');

    const meta = {
        title: t('meta.title'),
        description: t('meta.description'),
        keywords: t('meta.keywords')
    };

    const content = {
        title: t('title'),
        description: t('description')
    };

    return (
        <Curve>
            <Head>
                <title>{meta.title} - Simon TESSARD</title>
                <meta
                    name="description"
                    content={meta.description}
                />
                <meta
                    name="keywords"
                    content={meta.keywords}
                />
            </Head>

            <span id="top" className="opacity-0">top</span>

            <section className="px-4 md:px-6 pt-24 md:pt-32 pb-6">
                <PageTitle title={content.title} className="mb-3 md:mb-4"/>
                <p className="font-primary md:text-lg md:leading-8 md:max-w-4xl xl:max-w-2xl 2xl:max-w-3xl uppercase text-primary mb-14 md:mb-20">
                    {content.description}
                </p>
                <BlogGrid/>
            </section>

            <Footer/>
        </Curve>
    );
}