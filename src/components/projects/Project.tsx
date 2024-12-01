import Link from "next/link";

export default function Projet({ title, description, cover, index }) {
    return (
        <Link scroll={false} href={`/projects/${index}`} className="gsap-project group text-black">
            <div className="relative aspect-square mb-3">
                <img className="absolute top-0 left-0 size-full object-cover" src={cover} alt={title}/>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-primary tracking-tight font-medium font-primary text-2xl md:text-3xl uppercase">
                    {title}
                </h2>
                <svg className="size-6 md:size-7 stroke-primary md:group-hover:-translate-x-1 transition-transform duration-300"
                     width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </Link>
    );
}