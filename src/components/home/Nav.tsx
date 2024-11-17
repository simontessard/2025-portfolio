import NavLink from "@/components/home/nav/NavLink";

export default function Nav() {
    return (
        <nav className="ml-auto">
            <ul className="flex gap-8 justify-center">
                <NavLink href="/projects" text="Projects"/>
                <NavLink href="/about" text="About"/>
            </ul>
        </nav>
    )
}