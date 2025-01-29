import BlogCard from './BlogCard';
import { useTranslations } from 'next-intl';

type Article = {
    id: string;
    cover: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    categories: string[];
    slug: string;
}

export default function BlogGrid() {
    const t = useTranslations('blog');
    const articles = t.raw('articles') as Article[];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-10 2xl:gap-y-16 2xl:gap-x-12 w-full">
            {articles.map((article) => (
                <BlogCard
                    key={article.id}
                    article={article}
                />
            ))}
        </div>
    );
}