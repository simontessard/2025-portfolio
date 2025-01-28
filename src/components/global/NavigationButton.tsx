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
            className="size-fit flex items-center mx-auto gap-2 px-6 py-3 uppercase transition-colors duration-500"
            style={{
                color,
                backgroundColor: bgColorBase,
            }}
            onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = bgColorHover;
            }}
            onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = bgColorBase;
            }}
        >
            {text}
        </Link>
    )
}