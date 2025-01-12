import Link from "next/link";

interface LinkHoverProps {
    text: string;
    href: string
}
export default function LinkHover({text, href} : LinkHoverProps) {
    return (
        <Link className="relative group overflow-hidden" scroll={false} href={href} target="_blank">
            <span className="block md:group-hover:-translate-y-full transition-transform ease-out duration-300">
                {text}
            </span>
            <span className="block absolute left-0 top-0 translate-y-full md:group-hover:-translate-y-0 transition-transform ease-out duration-300">
                {text}
            </span>
        </Link>
    )
}