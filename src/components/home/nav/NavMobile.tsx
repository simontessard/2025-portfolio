import NavLink from "@/components/home/nav/NavLink";

export default function NavMobile() {
    return (
        <nav className="lg:hidden translate-y-2">
            <ul className="flex gap-5 md:gap-8 justify-end">
                <NavLink href="/projects" text="Projets"/>
                <NavLink href="/about" text="à propos"/>
            </ul>
        </nav>
    )
}