// src/pages/blog/[slug]/index.tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import blogData from '@/data/blogData.json';
import articlesContent from '@/data/articlesContent.json';
import Footer from "@/components/global/Footer/Footer";
import Curve from "@/components/utils/Curve";
import Head from "next/head";

interface ArticlePageProps {
    article: {
        id: string;
        title: string;
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { articles } = blogData;
    const article = articles.find((a) => a.slug === params?.slug);
    const content = articlesContent[params?.slug as string];

    if (!article || !content) {
        return { notFound: true };
    }

    return { props: { article, content } };
};

export default function ArticlePage({ article, content }: ArticlePageProps) {
    return (
        <Curve>
            <Head>
                <title>{article.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <section className="min-h-screen">

                <article className="px-4 pt-20 md:pt-40 pb-16 md:pb-24 max-w-3xl md:max-w-4xl 2xl:max-w-5xl mx-auto prose prose-invert">
                    <div className="mb-10 md:mb-14">
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

                    <div className="prose prose-h2:uppercase !max-w-none" dangerouslySetInnerHTML={{__html: content}}/>
                </article>

                <Footer/>
                
            </section>
        </Curve>
    );
}