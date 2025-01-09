import Curve from "@/components/utils/Curve";
import PageTitle from "@/components/global/PageTitle";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Footer from "@/components/global/Footer/Footer";
import Head from "next/head";

export default function Projects() {

    return (
        <Curve>
            <Head>
                <title>Mon travail - Simon TESSARD</title>
            </Head>

            <section className="bg-white">
                <span id="top" className="opacity-0">top</span>

                <div className="px-3.5 md:px-6 pt-24 md:pt-32 pb-6">
                    <PageTitle title="Mon travail" className="mb-20 lg:mb-20 xl:mb-24"/>
                    <ProjectsGrid/>
                </div>
            </section>

            <Footer/>
        </Curve>
    );
}
