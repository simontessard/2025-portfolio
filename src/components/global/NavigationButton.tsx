import Link from "next/link";

type NavigationButtonProps = {
    href: string;
    text: string;
    color?: string;
}

export default function NavigationButton({ href, text, color = "#0156cf" }: NavigationButtonProps) {
    const bgColorBase = `${color}1A`  // 10% opacité
    const bgColorHover = `${color}33` // 20% opacité

    return (
        <Link
            scroll={false}
            href={href}
            className="size-fit flex items-center gap-2 px-4 py-3 uppercase transition-colors duration-500 mb-4 md:mb-6 xl:mb-8"
            style={{ color, backgroundColor: bgColorBase }}

            onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = bgColorHover;
            }}
            onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = bgColorBase;
            }}
        >
            <svg
                 className="shrink-0 -rotate-90 size-6 md:size-[1.15rem] md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5 duration-300"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 82 82">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                      fill="currentColor"/>
            </svg>
            {text}
        </Link>
    )
}