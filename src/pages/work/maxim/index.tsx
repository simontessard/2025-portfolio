import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import GalleryMobile from "@/components/projects-slug/GalleryMobile";
import Heading from "@/components/projects-slug/Heading";
import Head from 'next/head'
import GalleryDesktop from "@/components/projects-slug/GalleryDesktop";
import {useEffect} from "react";
import useAppStore from "@/store/store";
import projectsData from '@/data/projects.json';

export default function Project() {
    const project = projectsData.projects.maxim;

    const mainImg = [
        "/images/projects/maxim/large/hero-header.png",
        "/images/projects/maxim/large/loader.png",
        "/images/projects/maxim/large/project-page.png",
    ];

    const desktopImg = [
        "/images/projects/maxim/large/about.png",
        "/images/projects/maxim/large/projects.png",
        "/images/projects/maxim/large/faq.png",
    ];

    const phoneImg = [
        "/images/projects/maxim/square/hero-header-mobile.jpg",
        "/images/projects/maxim/square/figma.jpg",
        "/images/projects/maxim/square/sections-mobile.jpg",
    ];

    const setColor = useAppStore((state) => state.setColor);

    useEffect(() => {
        setColor('#7d20f4');
        return () => setColor('#0156cf');
    }, []);

    return (
        <Curve>
            <Head>
                <title>{project.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 px-4 md:px-6 ">
                <Heading project={project} color="#7d20f4"/>
                <MainImage gallery={mainImg}/>

                <GalleryDesktop
                    gallery={desktopImg}
                    title={project.sections.experience.title}
                    color="#7d20f4"
                    desc={project.sections.experience.description}
                />

                <GalleryMobile
                    gallery={phoneImg}
                    title={project.sections.interaction.title}
                    color="#7d20f4"
                    desc={project.sections.interaction.description}
                />

            </div>

            <Footer color="#7d20f4"/>
        </Curve>
    );
}