import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import GalleryMobile from "@/components/projects-slug/GalleryMobile";
import Heading from "@/components/projects-slug/Heading";
import FourImages from "@/components/projects-slug/FourImages";
import Head from 'next/head'
import GalleryDesktop from "@/components/projects-slug/GalleryDesktop";
import NavigationButton from "@/components/global/NavigationButton";
import {useEffect} from "react";
import useAppStore from "@/store/store";
import { useTranslations } from 'next-intl';

export default function Project() {
    const t = useTranslations();
    const projectsData = t.raw('projects');
    const project = projectsData.tt;
    const projectData = t.raw('projects.tt');

    const mainImg = [project.gallery.large[0], project.gallery.large[1], project.gallery.large[3]];

    const setColor = useAppStore((state) => state.setColor);

    useEffect(() => {
        setColor('#c4143a');
        return () => setColor('#0156cf');
    }, []);

    return (
        <Curve>
            <Head>
                <title>{project.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 px-4 md:px-6 ">
                <Heading project={project} color="#c4143a"/>
                <MainImage gallery={mainImg}/>
            </div>

            <Footer color="#c4143a"/>
        </Curve>
    );
}