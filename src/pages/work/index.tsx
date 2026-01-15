import Curve from "@/components/utils/Curve";
import PageTitle from "@/components/global/PageTitle";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Footer from "@/components/global/Footer/Footer";
import Paragraph from "@/components/about/Paragraph";
import Head from "next/head";

export default function Projects() {
    return (
        <Curve>
            <Head>
                <title> Mon travail - Simon TESSARD </title>
            </Head>

            <section className="bg-white">
                <span id="top" className="opacity-0">top</span>

                <div className="px-4 md:px-6 pt-24 md:pt-32 pb-6">
                    <PageTitle
                        title="Mon travail"
                        className="mb-3 md:mb-4"
                    />
                    <Paragraph 
                        text="Voici un aperçu de mes réalisations, menées en toute autonomie, de la conception à la livraison."
                        className="mb-12 md:mb-16"
                    />
                    <ProjectsGrid/>
                </div>
            </section>

            <Footer/>
        </Curve>
    );
}