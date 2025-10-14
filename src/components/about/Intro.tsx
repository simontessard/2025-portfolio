import Paragraph from "@/components/about/Paragraph";
import LinkHover from "@/components/global/LinkHover";
import { useTranslations } from 'next-intl';

export default function Intro() {
    const t = useTranslations('about.intro');

    const content = {
        title: t('title'),
        paragraphs: [
            t('paragraphs.first'),
            t('paragraphs.second'),
        ]
    };

    return (
        <div className="flex max-lg:flex-col justify-between w-full mb-16 md:mb-20 lg:mb-28 xl:mb-36 2xl:mb-40 lg:pr-8 xl:pr-20 2xl:pr-52">

            <h2 className="md:sticky md:top-6 size-fit uppercase font-primary text-4xl lg:text-5xl xl:text-6xl text-primary font-medium max-lg:mb-8">
                {content.title}
            </h2>

            <div className="flex flex-col gap-8 md:gap-10 w-full lg:w-1/2 font-primary">
                {content.paragraphs.map((text, index) => (
                    <Paragraph key={index} text={text}/>
                ))}
            </div>
        </div>
    )
}