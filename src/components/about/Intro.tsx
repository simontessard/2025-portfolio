import Paragraph from "@/components/about/Paragraph";

export default function Intro() {
    const paragraphs = [
        "Je suis Simon TESSARD, un développeur web de 25 ans vivant à Rennes.",
        "Mes compétences englobent donc le développement Web (Front-end et Back-end) et le Web Design, ainsi je peux créer votre site web de bout en bout."
    ];

    return (
        <div className="flex max-lg:flex-col justify-between w-full mb-16 md:mb-20 lg:mb-28 xl:mb-36 2xl:mb-40 lg:pr-8 xl:pr-20 2xl:pr-52">

            <h2 className="md:sticky md:top-6 size-fit uppercase font-primary text-4xl lg:text-5xl xl:text-6xl text-primary font-medium max-lg:mb-8">
                à propos
            </h2>

            <div className="flex flex-col gap-8 md:gap-10 w-full lg:w-1/2 font-primary">
                {paragraphs.map((text: string, index: number) => (
                    <Paragraph key={index} text={text}/>
                ))}
            </div>
        </div>
    )
}