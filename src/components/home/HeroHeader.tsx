import Carousel from "@/components/home/Carousel";
import Nav from "@/components/home/Nav";
import Title from "@/components/home/Title";
import MouseTrail from "@/components/home/MouseTrail";
import Link from "next/link";

export default function HeroHeader() {
    return (
        <section className="h-[100dvh] md:h-screen p-3.5 lg:p-6">
            <MouseTrail className="max-lg:flex-col-reverse flex size-full">
                <Link href="/projects" className="max-lg:h-1/2 size-full lg:w-1/2 lg:pt-20">
                    <Carousel/>
                </Link>
                <div className="flex flex-col max-lg:pb-3 max-lg:h-1/2 max-lg:justify-end lg:self-end lg:w-3/5 2xl:w-1/2">
                    <Title/>
                    <Nav/>
                </div>
            </MouseTrail>
        </section>
    )
}