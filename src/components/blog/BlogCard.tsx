import Link from 'next/link';

interface BlogCardProps {
    article: any;
}

const BlogCard = ({ article }: BlogCardProps) => {
    return (
        <Link href={`/blog/${article.slug}`}
            className="group block bg-primary/5 hover:bg-primary/10 transition-colors duration-500 p-5 md:p-6 2xl:p-8"
        >
            <div className="flex flex-col h-full justify-between gap-4 md:gap-5 2xl:gap-6">
                <div className="flex gap-2 items-center">
                    <span className="text-primary/70 max-md:text-sm">{article.date}</span>
                    <span className="text-primary/70 max-md:text-sm">•</span>
                    <span className="text-primary/70 max-md:text-sm">{article.readTime}</span>
                </div>

                <h3 className="font-primary uppercase text-xl 2xl:text-2xl text-primary">
                    {article.title}
                </h3>

                <p className="text-primary/80 line-clamp-2">
                    {article.description}
                </p>

                <span className="text-sm text-primary/60 py-1 md:py-2 px-3 md:px-3.5 bg-primary/10 w-fit rounded">
                    {article.category}
                </span>
            </div>
        </Link>
    );
};

export default BlogCard;