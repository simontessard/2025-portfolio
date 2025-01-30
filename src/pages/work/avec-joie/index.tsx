import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import Heading from "@/components/projects-slug/Heading";
import Head from 'next/head'
import GalleryDesktop from "@/components/projects-slug/GalleryDesktop";
import NavigationButton from "@/components/global/NavigationButton";
import useAppStore from "@/store/store";
import {useEffect} from "react";
import { useTranslations } from 'next-intl';

export default function Project() {
    const t = useTranslations();
    const projectData = t.raw('projects.avec-joie');

    const mainImg = [projectData.gallery.large[0], projectData.gallery.large[1], projectData.gallery.large[2]];

    const desktopImg = [
        projectData.gallery.square[2],
        projectData.gallery.square[1],
        projectData.gallery.square[3]
    ];

    const setColor = useAppStore((state) => state.setColor);

    useEffect(() => {
        setColor('#9f2a16');
        return () => setColor('#0156cf');
    }, []);

    return (
        <Curve>
            <Head>
                <title>{projectData.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 ">
                <Heading project={projectData} color="#9f2a16"/>
                <MainImage gallery={mainImg}/>
                <GalleryDesktop
                    gallery={desktopImg}
                    color="#9f2a16"
                    title={projectData.sections.desktop.title}
                    desc={projectData.sections.desktop.description}
                />
                <NavigationButton
                    href="/work"
                    text={t('common.backToProjects')}
                    color="#9f2a16"
                />
            </div>

            <Footer color="#9f2a16"/>
        </Curve>
    );
}