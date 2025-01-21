import Link from 'next/link';
import Image from "next/image";

interface BlogCardProps {
    article: any;
}

const BlogCard = ({ article }: BlogCardProps) => {
    return (
        <Link href={`/blog/${article.slug}`}
            className="group flex flex-col bg-primary/5 md:hover:bg-primary/10 transition-colors duration-500"
        >
            <Image src={article.cover} width={1000} height={600} loading="eager" alt="Article" className="w-full h-48 md:h-56 2xl:h-64 object-cover"/>

            <div className="flex flex-col h-full justify-between gap-4 md:gap-5 2xl:gap-6 p-5 md:pt-6">

                <div className="flex gap-2 items-center font-primary text-primary uppercase max-lg:text-sm">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                </div>

                <h3 className="font-primary uppercase text-xl md:text-2xl 2xl:text-3xl  text-primary">
                    {article.title}
                </h3>

                <div className="mt-auto flex flex-wrap gap-4 md:gap-5">
                    {article.categories.map((category: any, index : number) => (
                        <span key={index} className="text-primary font-secondary italic uppercase">
                            {category}
                        </span>
                    ))}
                </div>

            </div>
        </Link>
    );
};

export default BlogCard;