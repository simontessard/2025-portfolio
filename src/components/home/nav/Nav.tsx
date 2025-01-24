import NavLink from "@/components/home/nav/NavLink";

export default function Nav() {
    return (
        <nav className="max-lg:hidden xl:translate-y-1">
            <ul className="flex gap-5 md:gap-8 justify-center">
                <NavLink href="/blog" text="Blog"/>
                <NavLink href="/work" text="Mon travail"/>
                <NavLink href="/about" text="à propos"/>
            </ul>
        </nav>
    )
}