// src/pages/blog/[slug]/index.tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import blogData from '@/data/blogData.json';
import articlesContent from '@/data/articlesContent.json';
import Footer from "@/components/global/Footer/Footer";
import Curve from "@/components/utils/Curve";
import Head from "next/head";
import Image from "next/image";

interface ArticlePageProps {
    article: {
        id: string;
        title: string;
        cover: string;
        description: string;
        date: string;
        readTime: string;
        category: string;
        slug: string;
    };
    content: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { articles } = blogData;

    const paths = articles.map((article) => ({
        params: { slug: article.slug }
    }));

    return { paths, fallback: false };
};

const typedArticlesContent: Record<string, string> = articlesContent;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { articles } = blogData;
    const article = articles.find((a) => a.slug === params?.slug);

    if (typeof params?.slug === "string") {
        const content = typedArticlesContent[params.slug];

        if (article && content) {
            return { props: { article, content } };
        }
    }

    return { notFound: true };
};

export default function ArticlePage({ article, content }: ArticlePageProps) {
    const pageTitle = `${article.title} - Simon TESSARD`;

    return (
        <Curve>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={article.description} />
            </Head>

            <span id="top" className="opacity-0">top</span>

            <section className="min-h-screen">

                <article className="px-4 mx-auto max-w-3xl md:max-w-4xl 2xl:max-w-5xl pt-20 md:pt-24 2xl:pt-28 pb-16 md:pb-24">
                    <div className="prose prose-invert !max-w-none mb-8 md:mb-14">
                        <div className="flex gap-2 items-center font-primary mb-4">
                            <span className="text-primary/70">{article.date}</span>
                            <span className="text-primary/70">•</span>
                            <span className="text-primary/70">{article.readTime}</span>
                        </div>

                        <h1 className="font-primary text-4xl md:text-5xl text-black mb-6">
                            {article.title}
                        </h1>

                        <span className="text-sm md:text-lg font-secondary text-primary italic uppercase">
                            {article.category}
                        </span>
                    </div>

                    <Image src={article.cover} alt={article.title} priority width={1920} height={1080} className="h-72 md:h-[45lvh] object-cover mb-10 md:mb-14"/>

                    <div className="prose prose-h2:uppercase marker:text-black !max-w-none" dangerouslySetInnerHTML={{__html: content}}/>

                </article>

                <Footer/>

            </section>
        </Curve>
    );
}