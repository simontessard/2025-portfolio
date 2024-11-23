export default function Experience() {
    const experience = [
        {
            title: "CEO - Founder",
            company: "Linary"
        },
        {
            title: "Développeur",
            company: "Freelance"
        },
        {
            title: "Développeur Front",
            company: "Cobalt Studio"
        }
    ];
    return (
        <div className="flex max-lg:flex-col lg:items-start justify-between w-full mb-24 md:mb-32">
            <h2 className="uppercase text-2xl md:text-5xl xl:text-6xl text-primary font-semibold max-lg:mb-14">
                Expériences
            </h2>
            <ul className="w-full lg:w-1/2">
                {experience.map((exp, index) => (
                    <li key={index} className="pb-6 lg:pb-8">
                        <span className="block h-0.5 w-full bg-primary mb-6 lg:mb-8"></span>
                        <p className="uppercase text-primary text-xl lg:text-2xl font-medium mb-1">{exp.title}</p>
                        <p className="text-primary md:text-2xl tracking-tight font-light uppercase font-primary italic">
                            {exp.company}
                        </p>
                    </li>
                ))}
                <span className="block h-0.5 w-full bg-primary mb-6 lg:mb-8"></span>
            </ul>
        </div>
    );
}