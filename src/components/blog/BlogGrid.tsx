import BlogCard from './BlogCard';
import blogData from '@/data/blogData.json';

const BlogGrid = () => {
    const { articles } = blogData;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-14 md:gap-10 2xl:gap-12 w-full">
            {articles.map((article: any) => (
                <BlogCard key={article.id} article={article} />
            ))}
        </div>
    );
};

export default BlogGrid;