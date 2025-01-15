import Paragraph from "@/components/about/Paragraph";

export default function Intro() {
    return (
        <div className="flex max-lg:flex-col justify-between w-full mb-16 md:mb-20 lg:mb-28 xl:mb-32 lg:pr-8 xl:pr-20 2xl:pr-52">

            <h2 className="uppercase font-primary text-4xl lg:text-5xl xl:text-6xl text-primary font-medium max-lg:mb-8">
                à propos
            </h2>

            <div className="w-full lg:w-1/2 font-primary">
                <Paragraph text="Je suis Simon TESSARD, un développeur web de 24 ans vivant à Rennes, qui vient de se lancer en indépendant."/>
                <Paragraph text="Mon objectif, à chaque projet, est de sublimer votre travail et vos compétences à travers des créations qui racontent votre histoire et reflètent votre identité. Je concrétise mes conceptions web en misant sur des finitions soignées avec des animations réfléchies."/>
                <Paragraph text="Mes compétences englobent donc le développement Web (Front-end et Back-end) et le Web Design, ainsi je peux créer votre site web de bout en bout."/>
                <Paragraph text="Disponible pour des missions de Freelance, n'hésitez pas à me contacter pour discuter de votre projet, ou pour toute autre demande."/>
            </div>
        </div>
    )
}