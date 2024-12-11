export default function Intro() {
    return (
        <div className="flex max-lg:flex-col justify-between w-full mb-24 md:mb-40 lg:pr-8 xl:pr-20 2xl:pr-52">
            <h2 className="uppercase font-primary text-4xl lg:text-5xl xl:text-6xl text-primary font-semibold max-lg:mb-12">
                à propos
            </h2>
            <div className="w-full lg:w-1/2 font-primary">
                <p className="tracking-tight text-xl lg:text-2xl md:leading-9 md:max-w-6xl uppercase text-primary lg:font-medium mb-8">
                    Je suis Simon TESSARD, un Développeur Web de 24 ans vivant à Rennes.
                </p>
                <p className="tracking-tight text-xl lg:text-2xl md:leading-9 md:max-w-6xl uppercase text-primary lg:font-medium mb-8">
                    En repoussant les limites visuelles à travers des projets, je façonne ma vision
                    créative autour de finition léchée, et agréable à la rétine, pour mettre en avant votre travail et vos compétences.
                </p>
                <p className="tracking-tight text-xl lg:text-2xl md:leading-9 md:max-w-6xl uppercase text-primary lg:font-medium">
                    Mes compétences couvrent le Développement Web (Front-end et Back-end), le Web Design,
                    le tout avec une touche de créativité.
                </p>
            </div>
        </div>
    )
}