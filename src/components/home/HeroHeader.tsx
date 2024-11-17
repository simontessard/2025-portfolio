import Carousel from "@/components/home/Carousel";
import Nav from "@/components/home/Nav";
import Title from "@/components/home/Title";

export default function HeroHeader() {
    return (
        <section className="h-screen max-lg:flex-col-reverse flex p-4 lg:p-6">
            <Carousel/>
            <div className="lg:self-end flex flex-col lg:w-3/5">
                <Title/>
                <Nav/>
            </div>
        </section>
    )
}