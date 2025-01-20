import BlogCard from './BlogCard';
import blogData from '@/data/blogData.json';

const BlogGrid = () => {
    const { articles } = blogData;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
            {articles.map((article: any) => (
                <BlogCard key={article.id} article={article} />
            ))}
        </div>
    );
};

export default BlogGrid;