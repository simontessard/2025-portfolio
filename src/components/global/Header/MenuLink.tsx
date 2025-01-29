import {usePathname} from "next/navigation";
import {hideMenu, closeMenuFunction} from './Menu/menu'
import Link from "next/link";
import {useTranslations} from "next-intl";

export default function MenuLink({href, text} : {href: string, text: string}) {
    const pathname = usePathname();
    const t = useTranslations('menu');

    const handleClick = () => {
        if (pathname !== href) {
            hideMenu();
        } else {
            closeMenuFunction()
        }
    };

    return (
        <Link onClick={handleClick} href={href} className={`js-menu-link -translate-y-1 opacity-0 relative group overflow-hidden text-white tracking-tight font-primary py-1 md:py-2 uppercase text-4xl md:text-5xl xl:text-7xl size-fit`}>

            {t(text)}

            {pathname === href &&
                <span className="absolute top-0 bottom-0 my-auto bg-white block h-1 xl:h-1.5 w-full"/>
            }

            {pathname != href &&
                <span
                    className="absolute top-0 bottom-0 -left-full my-auto bg-white block h-1 xl:h-1.5 w-full md:group-hover:translate-x-full transition-transform duration-300"/>
            }
        </Link>
    )
}