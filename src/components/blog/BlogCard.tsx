import Link from 'next/link';
import Image from "next/image";

interface BlogCardProps {
    article: any;
}

export default function BlogCard({ article }: BlogCardProps){
    return (
        <Link scroll={false} href={`/blog/${article.slug}`} className="group flex flex-col">

            <Image src={article.cover} width={1000} height={600} loading="eager" alt="Article"
                   className="w-full h-48 md:h-64 2xl:h-80 aspect-square object-cover"/>

            <div className="flex flex-col mt-2 md:mt-3">

                <div className="flex justify-between gap-2 mb-2">
                    <h3 className="font-primary uppercase text-xl md:text-xl 2xl:text-2xl text-primary">
                        {article.title}
                    </h3>
                    <svg className="shrink-0 rotate-90 text-primary size-7 lg:size-8 md:group-hover:-translate-x-1.5 transition-transform duration-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                              fill="currentColor"/>
                    </svg>
                </div>

                <div className="flex gap-2 items-center font-secondary italic text-primary uppercase text-xs md:text-sm">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                </div>

            </div>

        </Link>
    );
};