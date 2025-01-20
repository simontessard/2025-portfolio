// src/pages/blog/[slug]/index.tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import blogData from '@/data/blogData.json';
import articlesContent from '@/data/articlesContent.json';
import Footer from "@/components/global/Footer/Footer";
import Curve from "@/components/utils/Curve";

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

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { articles } = blogData;
    const article = articles.find((a) => a.slug === params?.slug);
    const content = articlesContent[params?.slug as string];

    if (!article || !content) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            article,
            content
        }
    };
};

export default function ArticlePage({ article, content }: ArticlePageProps) {
    return (
        <Curve>
            <span id="top" className="opacity-0">top</span>

            <section className="min-h-screen">

                <article className="px-4 pt-20 md:pt-40 pb-16 md:pb-24 max-w-3xl mx-auto prose prose-invert">
                    <div className="mb-10 md:mb-14">
                        <div className="flex gap-2 items-center mb-4">
                            <span className="text-primary/70">{article.date}</span>
                            <span className="text-primary/70">•</span>
                            <span className="text-primary/70">{article.readTime}</span>
                        </div>

                        <h1 className="font-primary text-4xl md:text-5xl text-primary mb-6">
                            {article.title}
                        </h1>

                        <span className="text-sm text-primary/60 py-2 px-4 bg-primary/10 rounded">
                            {article.category}
                        </span>
                    </div>

                    <div className="prose prose-h2:uppercase" dangerouslySetInnerHTML={{__html: content}}/>
                </article>

                <Footer/>
            </section>
        </Curve>
    );
}