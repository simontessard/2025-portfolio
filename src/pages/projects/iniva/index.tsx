import projects from "@/data/projectsData.json";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer";

export default function Project() {
    const project = projects[0];

    return (
        <Curve>
            <div className="min-h-screen pt-32 md:pt-40 xl:pt-44 pb-12 px-4 md:px-6">

                {/* Title */}
                <div className="flex gap-1.5 items-start mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-6xl xl:text-8xl uppercase text-primary font-semibold">
                        {project.title}
                    </h1>
                    <p className="font-medium italic text-primary mt-1 xl:mt-2.5">2024</p>
                </div>

                {/* Desc */}
                <p className="text-xl md:text-2xl md:leading-9 md:max-w-6xl uppercase text-primary font-medium mb-8">
                    {project.description}
                </p>

                <span className="block h-0.5 w-full bg-primary my-8 md:my-14"></span>

                {/* Content */}
                <img className="object-contain mb-12 md:mb-20" src={project.gallery[0]} alt={project.title} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-6 md:mb-10">
                    {project.gallery.map((image, index) => (
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
