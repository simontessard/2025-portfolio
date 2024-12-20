export default function Experience() {
    const experience = [
        {
            title: "Développeur Full-stack",
            company: "Freelance",
            date: "2024 - Aujourd'hui"
        },
        {
            title: "Développeur Full-stack",
            company: "Cobalt Studio",
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
                        <div className="flex justify-between">
                            <p className="uppercase text-primary font-primary text-lg lg:text-2xl font-medium mb-2">
                                {exp.title}
                            </p>
                            <p className="uppercase text-primary font-primary text-sm lg:text-xl font-medium mb-2">
                                {exp.date}
                            </p>
                        </div>
                        <p className="text-primary text-sm md:text-xl uppercase font-secondary">
                            {exp.company}
                        </p>
                    </li>
                ))}
                <span className="block h-0.5 w-full bg-primary mb-6 lg:mb-8"></span>
            </ul>
        </div>
    );
}