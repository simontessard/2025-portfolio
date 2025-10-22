import Link from "next/link";
import Image from "next/image";

type ProjectProps = {
    title: string;
    cover: string;
    path: string;
    technos: string[];
}

export default function Projet({ title, cover, path, technos }: ProjectProps) {
    return (
        <Link
            scroll={false}
            href={`/work/${path}`}
            className="gsap-project group text-black"
        >
            <div className="relative aspect-square mb-2 md:mb-3">
                <Image
                    width={1600}
                    height={1600}
                    loading="eager"
                    className="absolute top-0 left-0 size-full object-cover"
                    src={cover}
                    alt={title}
                />
            </div>
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-0.5">
                    <h2 className="text-primary italic font-secondary text-xl 2xl:text-2xl uppercase">
                        {title}
                    </h2>
                    <svg
                        className="rotate-90 text-primary size-7 lg:size-8 md:group-hover:-translate-x-1.5 transition-transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 82 82"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <h3 className="flex items-center font-primary tracking-tight max-md:text-sm uppercase text-primary">
                    {technos.map((techno, index) => (
                        <span key={index} className="flex items-center size-fit">
                            {techno}
                            {index < technos.length - 1 && <span className="inline-block size-1 md:size-1.5 mx-1.5 bg-primary rounded-full"/>}
                        </span>
                    ))}
                </h3>
            </div>
        </Link>
    );
}