import NavLink from "@/components/home/nav/NavLink";

export default function Nav() {
    return (
        <nav className="ml-auto">
            <ul className="flex gap-5 md:gap-8 justify-center">
                <NavLink href="/projects" text="Projets"/>
                <NavLink href="/about" text="à propos"/>
            </ul>
        </nav>
    )
}