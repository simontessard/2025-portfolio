import Curve from "@/components/utils/Curve";
import PageTitle from "@/components/global/PageTitle";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Footer from "@/components/global/Footer";

export default function Projects() {

    return (
        <Curve>
            <section className="bg-white">
                <span id="top" className="opacity-0">top</span>

                <div className="px-3.5 md:px-6 pt-32 pb-6">
                    <PageTitle title="Projets" className="mb-16 lg:mb-20 xl:mb-24"/>
                    <ProjectsGrid/>
                </div>
            </section>
            <Footer/>
        </Curve>
    );
}
