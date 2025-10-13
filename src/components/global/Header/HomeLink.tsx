import {usePathname} from "next/navigation";
import {hideMenu, closeMenuFunction} from './Menu/menu'
import Link from "next/link";

export default function HomeLink() {
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname !== "/") {
            hideMenu();
        } else {
            closeMenuFunction()
        }
    };

    return (
        <Link onClick={handleClick} href="/"
              className={`text-white md:text-lg font-primary`}>
              SIMON TESSARD
        </Link>
    )
}