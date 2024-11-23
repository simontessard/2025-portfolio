import Curve from "@/components/utils/Curve";
import PageTitle from "@/components/global/PageTitle";
import Footer from "@/components/global/Footer";
import Experience from "@/pages/about/Experience/Experience";
import Intro from "@/pages/about/Intro/Intro";

export default function About() {
    return (
        <Curve>
            <section className="bg-white pt-32 md:pt-40 px-4 md:px-6">
                <PageTitle title="Donner vie à vos idées"/>
                <Intro/>
                <Experience/>
            </section>
            <Footer/>
        </Curve>
    );
}
