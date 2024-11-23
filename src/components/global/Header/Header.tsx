import MenuOpenButton from "@/components/global/Header/MenuOpenButton";
import Menu from "@/components/global/Header/Menu";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="fixed z-50 top-0 flex justify-between w-full p-4 lg:p-6">
                <Link href="/" className="text-primary md:text-lg font-primary">
                    S. TESSARD
                </Link>
                <MenuOpenButton/>
            </header>
            <Menu/>
        </>
    )
}