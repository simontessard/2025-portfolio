import Curve from "@/components/utils/Curve";
import PageTitle from "@/components/global/PageTitle";
import ProjectsGrid from "@/pages/projects/ProjectsGrid";

export default function Projects() {
    return (
        <Curve>
            <section className="bg-white px-4 md:px-6 pt-32 md:pt-40 pb-6">
                <PageTitle title="Projets"/>
                <ProjectsGrid/>
            </section>
        </Curve>
    );
}
