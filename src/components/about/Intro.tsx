import Paragraph from "@/components/about/Paragraph";

export default function Intro() {
    return (
        <div className="flex max-lg:flex-col justify-between w-full mb-24 md:mb-40 lg:pr-8 xl:pr-20 2xl:pr-52">
            <h2 className="uppercase font-primary text-4xl lg:text-5xl xl:text-6xl text-primary font-medium max-lg:mb-12">
                à propos
            </h2>
            <div className="w-full lg:w-1/2 font-primary">
                <Paragraph text="Je suis Simon TESSARD, un Développeur Web de 24 ans vivant à Rennes, qui vient de se lancer en indépendant."/>
                <Paragraph text="En repoussant les limites visuelles à travers des projets, je façonne ma vision
                            créative autour de finition léchée, et agréable à la rétine, pour mettre en avant votre travail et vos
                            compétences. Je saurais mettre en avant votre activité au mieux"/>
                <Paragraph text="Mes compétences couvrent le Développement Web (Front-end et Back-end), le Web Design (création de maquettes sur-mesure),
                            toujours avec une touche de créativité."/>
                <Paragraph text="Disponible pour des missions de Freelance, n'hésitez pas à me contacter pour discuter de
                            votre projet, ou pour toute autre demande."/>
            </div>
        </div>
    )
}