import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import GalleryMobile from "@/components/projects-slug/GalleryMobile";
import Heading from "@/components/projects-slug/Heading";
import Head from 'next/head'
import NavigationButton from "@/components/global/NavigationButton";
import {useEffect} from "react";
import useAppStore from "@/store/store";
import { useTranslations } from 'next-intl';

export default function Project() {
    const t = useTranslations();
    const projectData = t.raw('projects.socbois');

    const mainImg = projectData.gallery.large[0];
    const phoneImg = [
        projectData.gallery.square[1],
        projectData.gallery.square[4],
        projectData.gallery.square[2],
        projectData.gallery.square[3]
    ];

    const setColor = useAppStore((state) => state.setColor);

    useEffect(() => {
        setColor('#402915');
        return () => setColor('#0156cf');
    }, []);

    return (
        <Curve>
            <Head>
                <title>{projectData.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6">
                <Heading project={projectData} color="#402915"/>
                <MainImage img={mainImg}/>
                <GalleryMobile
                    gallery={phoneImg}
                    title={projectData.sections.onepage.title}
                    color="#402915"
                    desc={projectData.sections.onepage.description}
                />
                <NavigationButton
                    href="/work"
                    text={t('common.backToProjects')}
                    color="#402915"
                />
            </div>

            <Footer color="#402915"/>
        </Curve>
    );
}