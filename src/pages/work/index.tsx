import Curve from "@/components/utils/Curve";
import PageTitle from "@/components/global/PageTitle";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Footer from "@/components/global/Footer/Footer";
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
                        secondWords="(5 projets sélectionnés)"
                        className="mb-14 md:mb-20"
                    />
                    <ProjectsGrid/>
                </div>
            </section>

            <Footer/>
        </Curve>
    );
}