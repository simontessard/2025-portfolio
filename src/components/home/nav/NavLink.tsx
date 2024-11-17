import Link from "next/link";

export default function NavLink({ href, text }: { href: string, text: string }) {
    return (
        <li>
            <Link href={href} className="group flex items-center gap-1.5 text-primary uppercase
            text-lg lg:text-3xl lg:leading-3 font-medium">
                {text}
                <svg className="size-5 lg:size-6 group-hover:-translate-x-1 transition-transform duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
        </li>

    )
}