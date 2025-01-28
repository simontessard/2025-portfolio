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
                <meta name="description" content="Découvrez mes derniers projets, réalisations et collaborations."/>
                <meta name="keywords" content="projets, réalisations, collaborations, portfolio, développement web, technologies, frontend, backend, nextjs, javascript"/>
            </Head>

            <section className="bg-white">
                <span id="top" className="opacity-0">top</span>

                <div className="px-4 md:px-6 pt-24 md:pt-32 pb-6">
                    <PageTitle title="Mon travail" secondWords="(5 projets)" className="mb-3 md:mb-4"/>
                    <p className="font-primary md:text-lg md:leading-8 md:max-w-4xl xl:max-w-2xl 2xl:max-w-3xl uppercase text-primary mb-10 md:mb-14">
                        Découvrez mes derniers projets, réalisations et collaborations.
                    </p>
                    <ProjectsGrid/>
                </div>
            </section>

            <Footer/>
        </Curve>
    );
}
