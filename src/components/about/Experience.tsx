export default function Experience() {

    const experiences = [
        {
            "year": "2024 - Aujourd'hui",
            "role": "Développeur Full-stack",
            "company": "Freelance",
            "description": "Création de sites vitrines et applications web pour divers clients."
        },
        {
            "year": "2023 - 2024",
            "role": "Développeur Front-end",
            "company": "Cobalt Studio",
            "description": "+10 Projets variés en développement web, dans divers domaines."
        }
    ]

    return (
        <div className="flex max-lg:flex-col lg:items-start justify-between w-full mb-16 md:mb-20 lg:mb-28 xl:mb-36 2xl:mb-40 lg:pr-8 xl:pr-20 2xl:pr-52">
            <h2 className="md:sticky md:top-6 uppercase font-primary text-4xl lg:text-5xl xl:text-6xl text-primary font-medium max-lg:mb-8">
                Expériences
            </h2>

            <ul className="w-full lg:w-1/2">
                {experiences.map((exp: any, index: number) => (
                    <li key={index} className="pb-6 lg:pb-8">
                        <span className="block h-0.5 w-full bg-primary mb-6 lg:mb-8"></span>
                        <div className="flex max-md:items-center justify-between mb-1 md:mb-1.5">
                            <p className="uppercase text-primary font-primary md:text-lg lg:text-2xl font-medium">
                                {exp.role}
                            </p>
                            <p className="uppercase text-primary font-primary text-sm lg:text-xl font-medium">
                                {exp.year}
                            </p>
                        </div>
                        <p className="text-primary text-sm md:text-xl uppercase font-secondary">
                            {exp.company}
                        </p>
                        {exp.description &&
                            <p className="text-primary font-light font-primary max-md:text-sm max-w-2xl uppercase mt-3 md:mt-5">
                                {exp.description}
                            </p>
                        }
                    </li>
                ))}
                <span className="block h-0.5 w-full bg-primary mb-6 lg:mb-8"></span>
            </ul>
        </div>
    );
}