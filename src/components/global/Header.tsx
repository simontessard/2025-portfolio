import Link from "next/link";
import MenuOpenButton from "@/components/global/MenuOpenButton";
import Menu from "@/components/global/Menu";

export default function Header() {
    return (
        <>
            <header className="fixed top-0 flex justify-between w-full p-4 lg:p-6">
                <Link href="/" className="text-primary text-lg font-medium font-primary">S. TESSARD</Link>
                <MenuOpenButton/>
            </header>
            <Menu/>
        </>
    )
}