import NavLink from "@/components/home/nav/NavLink";

export default function NavMobile() {
    return (
        <nav className="lg:hidden translate-y-2">
            <ul className="flex gap-5 md:gap-8 justify-end">
                <NavLink href="/blog" text="Blog"/>
                <NavLink href="/work" text="Mon travail"/>
                <NavLink href="/about" text="à propos"/>
            </ul>
        </nav>
    )
}