import Paragraph from "@/components/about/Paragraph";

export default function Intro() {
    return (
        <div className="flex max-lg:flex-col justify-between w-full mb-24 md:mb-40 lg:pr-8 xl:pr-20 2xl:pr-52">

            <h2 className="uppercase font-primary text-4xl lg:text-5xl xl:text-6xl text-primary font-medium max-lg:mb-12">
                à propos
            </h2>

            <div className="w-full lg:w-1/2 font-primary">
                <Paragraph
                    text="Je suis Simon TESSARD, un Développeur Web de 24 ans vivant à Rennes, qui vient de se lancer en indépendant."/>
                <Paragraph
                    text="En me repoussant à chaque projet, je concrétise mes conceptions en misant sur des finitions soignées et une esthétique réfléchie.
                    Mon objectif est de sublimer votre travail et vos compétences à travers des créations qui racontent votre histoire et reflètent votre identité."/>
                <Paragraph
                    text="Mes compétences englobent le Développement Web (Front-end et Back-end) et le Web Design, avec un savoir-faire particulier dans la réalisation de maquettes personnalisées,
                    toujours guidées par une vision créative."/>
                <Paragraph
                    text="Disponible pour des missions de Freelance, n'hésitez pas à me contacter pour discuter de
                    votre projet, ou pour toute autre demande."/>
            </div>
        </div>
    )
}