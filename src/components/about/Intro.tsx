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
                    text="à chaque projet, je concrétise mes conceptions en misant sur des finitions soignées avec une esthétique réfléchie.
                    Mon objectif est de sublimer votre travail et vos compétences à travers des créations qui racontent votre histoire et reflètent votre identité."/>
                <Paragraph
                    text="Mes compétences englobent le Développement Web (Front-end et Back-end) et le Web Design, ainsi je peux créer votre site web de bout en bout."/>
                <Paragraph
                    text="Disponible pour des missions de Freelance, n'hésitez pas à me contacter pour discuter de
                    votre projet, ou pour toute autre demande."/>
            </div>
        </div>
    )
}