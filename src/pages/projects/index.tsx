import Curve from "@/components/utils/Curve";
import PageTitle from "@/components/global/PageTitle";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Footer from "@/components/global/Footer";

export default function Projects() {

    return (
        <Curve>
            <section className="bg-white px-4 md:px-6 pt-32 md:pt-40 xl:pt-44 pb-6">
                <PageTitle title="Projets"/>
                <ProjectsGrid/>
            </section>
            <Footer/>
        </Curve>
    );
}
