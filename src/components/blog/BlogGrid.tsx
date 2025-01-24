import BlogCard from './BlogCard';
import blogData from '@/data/blogData.json';

export default function BlogGrid() {
    const { articles } = blogData;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-10 2xl:gap-y-16 2xl:gap-x-12 w-full">
            {articles.map((article: any) => (
                <BlogCard key={article.id} article={article} />
            ))}
        </div>
    );
};