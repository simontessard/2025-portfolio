export default function Tools() {
    const skills = [
        {
          title: "Applications complètes",
          desc: "De l’interface utilisateur au back-end et à la base de données",
        },
        {
          title: "Interfaces modernes",
          desc: "UI claires, responsives et orientées expérience utilisateur",
        },
        {
          title: "APIs & logique métier",
          desc: "Conception d’APIs REST sécurisées et maintenables",
        },
        {
          title: "Qualité du code",
          desc: "Lisibilité, maintenabilité et bonnes pratiques",
        },
        {
          title: "Performance",
          desc: "Optimisation des temps de chargement et du rendu",
        },
        {
          title: "Architecture",
          desc: "Code structuré et évolutif adapté au projet",
        },
        {
          title: "Collaboration",
          desc: "Travail en équipe agile avec designers et développeurs",
        },
        {
          title: "Autonomie",
          desc: "Capacité à mener un projet de bout en bout",
        },
        {
          title: "Design & intégration",
          desc: "Intégration fidèle de maquettes et attention aux détails",
        },
      ];
      
    return (
        <div className="flex max-lg:flex-col lg:items-start justify-between w-full mb-16 md:mb-20 lg:mb-28 xl:mb-36 lg:pr-8 xl:pr-20 2xl:pr-52">
            <h2 className="md:sticky md:top-6 uppercase font-primary text-4xl lg:text-5xl xl:text-6xl text-primary font-medium max-lg:mb-8">
                Compétences
            </h2>

            <ul className="grid grid-cols-2 2xl:grid-cols-3 gap-4 w-full lg:w-1/2">
                {skills.map((skill, index) => (
                    <li key={index}
                        className="flex flex-col gap-1 bg-primary/5 justify-center items-center aspect-square">
                        <p className="uppercase text-primary font-primary text-sm md:text-base text-center font-medium">
                            {skill.title}
                        </p>
                        <p className="uppercase text-primary italic font-secondary text-xs md:text-sm text-center w-3/4 md:w-2/3 font-medium">
                            {skill.desc}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}