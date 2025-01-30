import Footer from "@/components/global/Footer/Footer";
import Curve from "@/components/utils/Curve";
import Head from "next/head";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import frArticles from '@/i18n/locales/articles.fr.json';
import enArticles from '@/i18n/locales/articles.en.json';

type ArticlesContent = typeof frArticles;
type ArticleSlug = keyof ArticlesContent;

export default function ArticlePage() {
    const router = useRouter();
    const { slug } = router.query;
    const { locale } = router;

    const t = useTranslations('blog');
    const articles = t.raw('articles');
    const article = articles.find((a: any) => a.slug === slug);

    const articlesContent = locale === 'fr' ? frArticles : enArticles;
    const content = articlesContent[slug as ArticleSlug];

    if (!article || !content) return null;

    return (
        <Curve>
            <Head>
                <title>{article.title} - Simon TESSARD</title>
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
                            {article.categories.join(', ')}
                        </span>
                    </div>

                    <Image
                        src={article.cover}
                        alt={article.title}
                        priority
                        width={1920}
                        height={1080}
                        className="h-72 md:h-[45lvh] object-cover mb-10 md:mb-14"
                    />

                    <div
                        className="prose prose-h2:uppercase marker:text-black !max-w-none"
                        dangerouslySetInnerHTML={{__html: content}}
                    />
                </article>
                <Footer/>
            </section>
        </Curve>
    );
}