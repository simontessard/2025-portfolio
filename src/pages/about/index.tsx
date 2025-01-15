import Curve from "@/components/utils/Curve";
import PageTitle from "@/components/global/PageTitle";
import Footer from "@/components/global/Footer/Footer";
import Experience from "@/components/about/Experience";
import Intro from "@/components/about/Intro";
import InfiniteCarousel from "@/components/about/InfiniteCarousel";
import Head from "next/head";
import Tools from "@/components/about/Tools";
import Expertises from "@/components/about/Expertises";

export default function About() {
    return (
        <Curve>
            <Head>
                <title>À propos - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <section className="bg-white pt-28 md:pt-32">
                <PageTitle title="Donner vie" secondWords="à vos idées" className="px-3.5 md:px-6 mb-6 md:mb-8"/>
                <InfiniteCarousel/>
                <div className="px-3.5 md:px-6">
                    <Intro/>
                    <Expertises/>
                    <Experience/>
                    <Tools/>
                </div>
            </section>
            <Footer/>
        </Curve>
    );
}
