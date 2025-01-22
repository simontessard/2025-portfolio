import Paragraph from "@/components/about/Paragraph";
import LinkHover from "@/components/global/LinkHover";

export default function Intro() {
    return (
        <div className="flex max-lg:flex-col justify-between w-full mb-16 md:mb-20 lg:mb-28 xl:mb-36 lg:pr-8 xl:pr-20 2xl:pr-52">

            <h2 className="md:sticky md:top-6 size-fit uppercase font-primary text-4xl lg:text-5xl xl:text-6xl text-primary font-medium max-lg:mb-8">
                à propos
            </h2>

            <div className="flex flex-col gap-8 md:gap-10 w-full lg:w-1/2 font-primary">
                <Paragraph
                    text="Je suis Simon TESSARD, un développeur web de 24 ans vivant à Rennes, qui vient de se lancer en indépendant."/>
                <Paragraph
                    text="Mon objectif, à chaque projet, est de sublimer votre travail et vos compétences à travers une création qui raconte votre histoire et reflète votre identité. Je le concrétise en misant sur des finitions appliquées, couplées avec des animations fluides."/>
                <Paragraph
                    text="Mes compétences englobent donc le développement Web (Front-end et Back-end) et le Web Design, ainsi je peux créer votre site web de bout en bout."/>
                <Paragraph
                    text="Disponible pour des missions de Freelance, n'hésitez pas à me contacter pour discuter de votre projet, ou pour toute autre demande."/>

                <div className="ml-auto flex gap-5 md:gap-6 text-primary md:text-lg uppercase">
                    <LinkHover text="Email" href="mailto:pro@simontessard.fr"/>
                    <LinkHover text="LinkedIn" href="https://www.linkedin.com/in/simon-tessard-138733198/"/>
                </div>
            </div>
        </div>
    )
}