import Curve from "@/components/utils/Curve";

export default function Project() {
    return (
        <Curve>
            <div className="min-h-screen pt-32 md:pt-40 pb-12 px-4 md:px-6">
                <div className="flex gap-2 items-center mb-8">
                    <h1 className="text-3xl md:text-6xl uppercase text-primary font-semibold">Titre du projet</h1>
                    <p className="font-medium italic text-primary">2024</p>
                </div>
                <p className="text-primary font-semibold tracking-tight uppercase text-xl max-w-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                    semper nunc, vel ultricies sapien. Nulla facilisi. Nullam nec.
                </p>
                <span className="block h-0.5 w-full bg-primary my-8 md:my-14"></span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="aspect-square">
                        <img className="object-cover" src="https://picsum.photos/1000/1000" alt="Projet 1"/>
                    </div>
                    <div className="aspect-square">
                        <img className="object-cover" src="https://picsum.photos/1000/1000" alt="Projet 2"/>
                    </div>
                </div>
            </div>
        </Curve>
    )
}