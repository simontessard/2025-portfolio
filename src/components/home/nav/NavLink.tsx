import Link from "next/link";

export default function NavLink({ href, text }: { href: string, text: string }) {
    return (
        <li>
            <Link href={href} className="group flex items-center gap-1 md:gap-2 font-primary text-primary uppercase
            text-lg md:text-2xl xl:text-3xl xl:leading-3 font-medium">
                {text}
                <svg
                    className="rotate-90 size-4 md:size-5 xl:size-7 md:group-hover:-translate-x-1.5 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                          fill="currentColor"
                    />
                </svg>
            </Link>
        </li>

    )
}