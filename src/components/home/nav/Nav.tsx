import NavLink from "@/components/home/nav/NavLink";

export default function Nav() {
    return (
        <nav className="max-lg:hidden xl:translate-y-1">
            <ul className="flex gap-5 md:gap-8 justify-center">
                <NavLink href="/blog" text="blog"/>
                <NavLink href="/work" text="work"/>
                <NavLink href="/about" text="about"/>
            </ul>
        </nav>
    )
}