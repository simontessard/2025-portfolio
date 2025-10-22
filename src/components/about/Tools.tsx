export default function Tools() {
    const skills = [
        { title: "Typescript", desc: "Langage" },
        { title: "ReactJS", desc: "Librairie" },
        { title: "NextJS", desc: "Framework" },
        { title: "Tailwind", desc: "CSS" },
        { title: "GSAP", desc: "Animation" },
        { title: "Framer-Motion", desc: "Animation" },
        { title: "Figma", desc: "Design" },
        { title: "Three.js", desc: "3D" },
        { title: "ESLint / Prettier", desc: "Qualité" },
        { title: "Git / GitHub / Gitlab", desc: "Versioning" },
        { title: "Wordpress", desc: "CMS" },
    ];
    return (
        <div className="flex max-lg:flex-col lg:items-start justify-between w-full mb-16 md:mb-20 lg:mb-28 xl:mb-36 lg:pr-8 xl:pr-20 2xl:pr-52">
            <h2 className="md:sticky md:top-6 uppercase font-primary text-4xl lg:text-5xl xl:text-6xl text-primary font-medium max-lg:mb-8">
                Compétences
            </h2>

            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full lg:w-1/2">
                {skills.map((skill, index) => (
                    <li key={index}
                        className="flex flex-col gap-1 bg-primary/5 justify-center items-center aspect-square">
                        <p className="uppercase text-primary font-primary md:text-lg lg:text-xl font-medium">
                            {skill.title}
                        </p>
                        <p className="uppercase text-primary italic font-secondary text-sm lg:text-base font-medium">
                            {skill.desc}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}