import Carousel from "@/components/home/Carousel";
import Nav from "@/components/home/nav/Nav";
import Title from "@/components/home/Title";
import Link from "next/link";
import Contact from "@/components/home/Contact";
import NavMobile from "@/components/home/nav/NavMobile";

export default function HeroHeader() {
    return (
        <section className="h-[100dvh] md:h-screen p-4 lg:p-6 overflow-hidden">
            <div className="max-xl:flex-col-reverse flex size-full xl:pt-20">
                <NavMobile/>
                <Link href="/work" className="max-xl:h-1/2 size-full xl:w-1/2">
                    <Carousel/>
                </Link>
                <div className="flex flex-col max-xl:pb-2 max-xl:h-1/2 max-xl:justify-end xl:self-end xl:w-3/5 2xl:w-1/2">
                    <div className="xl:pl-6 pb-0 lg:pb-6 xl:pb-16">
                        <Title/>
                        <Contact/>
                    </div>
                    <div className="xl:pl-6 flex items-end justify-end xl:pt-8">
                        <Nav/>
                    </div>
                </div>
            </div>
        </section>
    )
}