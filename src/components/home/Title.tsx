import {useTranslations} from "next-intl";

export default function Title() {
    const t = useTranslations('others');

    return (
        <div>
            <h1 className="text-primary">
                <span className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-primary font-medium uppercase">
                    Front
                </span>
                <span className="text-3xl md:text-4xl xl-text-5xl 2xl:text-6xl text-primary font-secondary uppercase italic">
                    {t('homeText1')}
                </span>
                <br/>
                <span className="inline-block mb-1 xl:mb-2 text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-primary tracking-tight font-medium uppercase">
                    {t('homeText2')}
                </span>
            </h1>
        </div>
    )
}