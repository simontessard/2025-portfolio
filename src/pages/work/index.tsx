import Curve from "@/components/utils/Curve";
import PageTitle from "@/components/global/PageTitle";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Footer from "@/components/global/Footer/Footer";
import Head from "next/head";
import { useTranslations } from 'next-intl';

export default function Projects() {
    const t = useTranslations();

    const content = {
        title: {
            main: t('title.main'),
            second: t('title.second')
        }
    };

    return (
        <Curve>
            <Head>
                <title>{content.title.main} - Simon TESSARD</title>
            </Head>

            <section className="bg-white">
                <span id="top" className="opacity-0">top</span>

                <div className="px-4 md:px-6 pt-24 md:pt-32 pb-6">
                    <PageTitle
                        title={content.title.main}
                        secondWords={content.title.second}
                        className="mb-6 md:mb-12"
                    />
                    <ProjectsGrid/>
                </div>
            </section>

            <Footer/>
        </Curve>
    );
}