import Curve from "@/components/utils/Curve";
import PageTitle from "@/components/global/PageTitle";
import Footer from "@/components/global/Footer";
import Experience from "@/components/about/Experience";
import Intro from "@/components/about/Intro";
import InfiniteCarousel from "@/components/about/InfiniteCarousel";

export default function About() {
    return (
        <Curve>
            <section className="bg-white pt-32 md:pt-40 xl:pt-44">
                <PageTitle title="Donner la vie à vos idées" className="px-4 md:px-6 mb-6 md:mb-8"/>
                <InfiniteCarousel/>
                <div className="px-4 md:px-6">
                    <Intro/>
                    <Experience/>
                </div>
            </section>
            <Footer/>
        </Curve>
    );
}
