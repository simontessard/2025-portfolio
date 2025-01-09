import {usePathname} from "next/navigation";
import Link from "next/link";

export default function FooterLink({href, text} : {href: string, text: string}) {
    const pathname = usePathname();
    return (
        <Link scroll={false} href={href}
              className={`relative group size-fit overflow-hidden flex items-center gap-2 text-primary tracking-tight font-primary uppercase text-3xl md:text-4xl xl:pt-1 xl:text-5xl 2xl:text-6xl`}>
            <span className="block md:hidden size-2 bg-primary rounded-full"/>

            {text}
            {pathname === href &&
                <span className="absolute top-0 bottom-0 my-auto bg-primary block h-1 xl:h-1.5 w-full"/>
            }
            {pathname != href &&
                <span
                    className="absolute top-0 bottom-0 -left-full my-auto bg-primary block h-1 xl:h-1.5 w-full md:group-hover:translate-x-full transition-transform duration-300"/>
            }
        </Link>
    )
}