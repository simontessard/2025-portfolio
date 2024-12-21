import NavLink from "@/components/home/nav/NavLink";

export default function Nav() {
    return (
        <nav className="no-image translate-y-1 ml-auto md:pt-4 xl:pt-8 md:pl-4 xl:pl-8">
            <ul className="flex gap-5 md:gap-8 justify-center">
                <NavLink href="/projects" text="Projets"/>
                <NavLink href="/about" text="à propos"/>
            </ul>
        </nav>
    )
}