import { usePathname } from "next/navigation";
import Link from "next/link";

interface FooterLinkProps {
    href: string;
    text: string;
    color?: string;
}

export default function FooterLink({ href, text, color = "#0156cf" }: FooterLinkProps) {
    const pathname = usePathname();

    return (
        <Link scroll={false} href={href} style={{ color }}
            className={`relative group size-fit overflow-hidden tracking-tight font-primary uppercase text-3xl md:text-4xl xl:pt-1 xl:text-5xl 2xl:text-6xl`}>

            {text}

            {pathname === href && (
                <span
                    style={{ backgroundColor: color }}
                    className="absolute top-0 bottom-0 my-auto block h-1 xl:h-1.5 w-full"
                />
            )}

            {pathname !== href && (
                <span
                    style={{ backgroundColor: color }}
                    className="absolute top-0 bottom-0 -left-full my-auto block h-1 xl:h-1.5 w-full md:group-hover:translate-x-full transition-transform duration-300"
                />
            )}
        </Link>
    )
}