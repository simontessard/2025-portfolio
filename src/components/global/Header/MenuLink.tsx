import {usePathname} from "next/navigation";
import Link from "next/link";

export default function MenuLink({href, text, hideMenu} : {href: string, text: string, hideMenu: () => void}) {
    const pathname = usePathname();
    return (
        <Link onClick={hideMenu} href={href} className={`relative group overflow-hidden text-white tracking-tight font-primary py-2 uppercase text-4xl md:text-5xl xl:text-7xl`}>
            {text}
            {pathname === href &&
                <span className="absolute top-0 bottom-0 my-auto bg-white block h-1 xl:h-1.5 w-full"/>
            }
            {pathname != href &&
                <span className="absolute top-0 bottom-0 -left-full my-auto bg-white block h-1 xl:h-1.5 w-full md:group-hover:translate-x-full transition-transform duration-300"/>
            }
        </Link>
    )
}