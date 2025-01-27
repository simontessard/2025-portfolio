import Link from "next/link";

type NavigationButtonProps = {
    href: string,
    text: string
}

export default function NavigationButton({ href, text }: NavigationButtonProps) {
    return (
        <Link scroll={false} href={href} className="size-fit flex items-center mx-auto gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20
                        text-primary uppercase transition-colors duration-300">
            {text}
        </Link>
    )
}