import Carousel from "@/components/home/Carousel";
import Nav from "@/components/home/nav/Nav";
import Title from "@/components/home/Title";
import MouseTrail from "@/components/home/MouseTrail";
import Link from "next/link";
import Contact from "@/components/home/Contact";
import NavMobile from "@/components/home/nav/NavMobile";

export default function HeroHeader() {
    return (
        <section className="h-[100dvh] md:h-screen p-3.5 lg:p-6 overflow-hidden">
            <MouseTrail className="max-xl:flex-col-reverse flex size-full">
                <NavMobile/>
                <Link href="/projects" className="max-xl:h-1/2 size-full xl:w-1/2 xl:pt-20">
                    <Carousel/>
                </Link>
                <div className="flex flex-col max-xl:pb-2 max-xl:h-1/2 max-xl:justify-end xl:self-end xl:w-3/5 2xl:w-1/2">
                    <Title/>
                    <div className="no-image xl:pl-6 flex items-end justify-between md:pt-4 xl:pt-8">
                        <Contact/>
                        <Nav/>
                    </div>
                </div>
            </MouseTrail>
        </section>
    )
}