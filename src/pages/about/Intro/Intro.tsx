export default function Intro() {
    return (
        <div className="flex max-md:flex-col justify-between w-full mb-24 md:mb-40">
            <h2 className="uppercase text-2xl md:text-5xl xl:text-6xl text-primary font-semibold max-lg:mb-8">
                à propos
            </h2>
            <div className="w-full lg:w-1/2">
                <p className="text-lg md:text-2xl md:leading-9 md:max-w-6xl uppercase text-primary font-medium mb-8">
                    Je suis François-Xavier Manceau, un Développeur Web Créatif de 24 ans vivant à Paris.
                </p>
                <p className="text-xl md:text-2xl md:leading-9 md:max-w-6xl uppercase text-primary font-medium mb-8">
                    En repoussant les limites visuelles à travers des projets expérimentaux, je façonne ma vision
                    créative autour de la transition entre une saturation paisible et une obscurité intense.
                </p>
                <p className="text-xl md:text-2xl md:leading-9 md:max-w-6xl uppercase text-primary font-medium">
                    Mes compétences couvrent le Développement Web (Front-end et Back-end), la Direction Artistique,
                    le
                    Branding, l'Impression, le Motion Design, et une touche de codage.
                </p>
            </div>
        </div>
    )
}