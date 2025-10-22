export default function Expertises() {
    const expertises = [
        "Interfaces modernes et performantes",
        "Intégration UI depuis Figma",
        "Travail en équipe produit et design",
        "Optimisation SEO et accessibilité",
        "Qualité, tests et bonnes pratiques",
        "Veille et amélioration continue"
    ];

    return (
        <div className="flex max-lg:flex-col lg:items-start justify-between w-full mb-20 lg:mb-28 xl:mb-36 2xl:mb-40 lg:pr-8 xl:pr-20 2xl:pr-52">
            <h2 className="md:sticky md:top-6 uppercase font-primary text-4xl lg:text-5xl xl:text-6xl text-primary font-medium max-lg:mb-8">
                Expertises
            </h2>

            <ul className="flex flex-wrap gap-x-2.5 md:gap-x-3.5 gap-y-2 md:gap-y-4 w-full lg:w-1/2">
                {expertises.map((exp: string, index : number) => (
                    <li key={index} className="flex gap-2 md:gap-3.5 justify-center items-center">
                        <p className="uppercase text-primary font-primary font-medium">
                            {exp}
                        </p>
                        <span className="block bg-primary size-1 md:size-1.5 rounded-full"/>
                    </li>
                ))}
            </ul>
        </div>
    );
}