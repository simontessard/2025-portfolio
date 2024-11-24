import Carousel from "@/components/home/Carousel";
import Nav from "@/components/home/Nav";
import Title from "@/components/home/Title";

export default function HeroHeader() {
    return (
        <section className="h-screen max-lg:flex-col-reverse flex p-4 lg:p-6">
            <Carousel/>
            <div className="flex flex-col max-lg:pb-4 max-lg:h-1/2 max-lg:justify-end lg:self-end lg:w-3/5 2xl:w-1/2">
                <Title/>
                <Nav/>
            </div>
        </section>
    )
}