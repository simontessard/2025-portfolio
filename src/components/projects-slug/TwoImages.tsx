import Fancybox from "@/components/global/Fancybox";
import ImagesDesc from "@/components/projects-slug/ImagesDesc";

export default function TwoImages({ project }: {project: any}) {
    return (
        <Fancybox>

            <ImagesDesc title="Un site logique"
                        description="Il se caractérise par une page d'accueil fournie, qui invite le visiteur à découvrir les pages
                        détaillant un hôtel ou une activité. à travers différents clichés et vidéos, on y découvre facilement une
                        représentation du Gabon qui donne envie."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">

                <a data-fancybox="gallery" href={project.gallery[7]} className="cursor-zoom-in">
                    <img
                        className="object-cover size-full"
                        src={project.gallery[7]}
                        alt={project.title}
                    />
                </a>

                <a data-fancybox="gallery" href={project.gallery[6]} className="cursor-zoom-in">
                    <img
                        className="object-cover size-full"
                        src={project.gallery[6]}
                        alt={project.title}
                    />
                </a>

            </div>
        </Fancybox>
    )
}