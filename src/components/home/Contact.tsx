import Link from "next/link";

export default function Contact() {
    return (
        <div className="flex gap-6 max-lg:ml-auto text-primary font-primary font-medium uppercase xl:translate-y-1.5">
            <LinkHover text="LinkedIn" href="https://www.linkedin.com/in/simon-tessard-138733198/"/>
            <LinkHover text="Email" href="mailto:pro@simontessard.fr"/>
        </div>
    )
}

interface LinkHoverProps {
    text: string;
    href: string
}
function LinkHover({text, href} : LinkHoverProps) {
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