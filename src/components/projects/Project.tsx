import Link from "next/link";

export default function Projet({ title, cover, index } : { title: string, cover: string, index: number }) {
    return (
        <Link scroll={false} href={`/projects/${index}`} className="gsap-project group text-black">
            <div className="relative aspect-square mb-3">
                <img className="absolute top-0 left-0 size-full object-cover" src={cover} alt={title}/>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-primary tracking-tight font-primary text-2xl md:text-3xl uppercase">
                    {title}
                </h2>
                <svg
                    className="rotate-90 text-primary size-7 lg:size-8 md:group-hover:-translate-x-1 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                          fill="currentColor"
                    />
                </svg>
            </div>
        </Link>
    );
}