export default function Experience() {
    const experience = [
        {
            title: "Développeur",
            company: "Freelance",
            desc: "J'ai récemment lancé mon activité en freelance, où je développe des sites vitrines sur mesure.",
            date: "2024 - Aujourd'hui"
        },
        {
            title: "Développeur Full-stack",
            company: "Agence Cobalt Studio",
            desc: "En tant qu'alternant, j'ai participé activement au développement de +10 projets web diversifiés, couvrant un large éventail de domaines. " +
                "J'ai ainsi une capacité d'adaptation aux besoins spécifiques de chaque projet.",
            date: "2023 - 2024"
        }
    ];
    return (
        <div className="flex max-lg:flex-col lg:items-start justify-between w-full mb-24 md:mb-32 lg:pr-8 xl:pr-20 2xl:pr-52">
            <h2 className="uppercase font-primary text-4xl lg:text-5xl xl:text-6xl text-primary font-medium max-lg:mb-14">
                Expériences
            </h2>
            <ul className="w-full lg:w-1/2">
                {experience.map((exp, index) => (
                    <li key={index} className="pb-6 lg:pb-8">
                        <span className="block h-0.5 w-full bg-primary mb-6 lg:mb-8"></span>
                        <div className="flex max-md:items-center justify-between mb-1 md:mb-1.5">
                            <p className="uppercase text-primary font-primary md:text-lg lg:text-2xl font-medium">
                                {exp.title}
                            </p>
                            <p className="uppercase text-primary font-primary text-sm lg:text-xl font-medium">
                                {exp.date}
                            </p>
                        </div>
                        <p className="text-primary text-sm md:text-xl uppercase font-secondary">
                            {exp.company}
                        </p>
                        {exp.desc &&
                            <p className="text-primary font-light font-primary max-md:text-sm max-w-2xl uppercase mt-3 md:mt-5">
                                {exp.desc}
                            </p>
                        }
                    </li>
                ))}
                <span className="block h-0.5 w-full bg-primary mb-6 lg:mb-8"></span>
            </ul>
        </div>
    );
}