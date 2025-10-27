import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import Heading from "@/components/projects-slug/Heading";
import Head from 'next/head'
import GalleryDesktop from "@/components/projects-slug/GalleryDesktop";
import {useEffect} from "react";
import useAppStore from "@/store/store";
import projectsData from '@/data/projects.json';

export default function Project() {
    const project = projectsData.projects.cdc;

    const mainImg = [
        "/images/projects/cdc/large/mockup.png",
        "/images/projects/cdc/large/desktop-2.jpg",
        "/images/projects/cdc/large/desktop-1.jpg",
    ];

    const desktopImg = [
        "/images/projects/cdc/large/desktop-3.jpg",
        "/images/projects/cdc/large/desktop-2.jpg",
        "/images/projects/cdc/large/desktop-1.jpg",
    ];

    const setColor = useAppStore((state) => state.setColor);

    useEffect(() => {
        setColor('#c28d55');
        return () => setColor('#0156cf');
    }, []);

    return (
        <Curve>
            <Head>
                <title>{project.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 px-4 md:px-6 ">
                <Heading project={project} color="#c28d55"/>
                <MainImage gallery={mainImg}/>

                <GalleryDesktop
                    gallery={desktopImg}
                    color="#c28d55"
                    title={project.sections.conception.title}
                    desc={project.sections.conception.description}
                />
            </div>

            <Footer color="#c28d55"/>
        </Curve>
    );
}