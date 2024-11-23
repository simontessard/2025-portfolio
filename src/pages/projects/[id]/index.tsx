import projects from "@/data/projectsData.json";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer";
import { useRouter } from "next/router";

export default function Project() {
    const router = useRouter();
    const { id } = router.query;

    const project = projects[parseInt(id as string, 10)];

    if (!project) {
        return <div className="h-screen bg-primary"></div>;
    }

    return (
        <Curve>
            <div className="min-h-screen pt-32 md:pt-40 pb-12 px-4 md:px-6">
                <div className="flex gap-1.5 items-start mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-6xl uppercase text-primary font-semibold">
                        {project.title}
                    </h1>
                    <p className="font-medium italic text-primary mt-1">2024</p>
                </div>
                <p className="text-primary font-medium leading-8 tracking-tight uppercase text-xl md:max-w-3xl">
                    {project.description}
                </p>
                <span className="block h-0.5 w-full bg-primary my-8 md:my-14"></span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-6 md:mb-10">
                    {project.imageGrid.map((image, index) => (
                        <div key={index} className="aspect-square">
                            <img
                                className="object-cover size-full"
                                src={image}
                                alt={project.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </Curve>
    );
}
