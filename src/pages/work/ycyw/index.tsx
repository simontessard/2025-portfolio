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
    const project = projectsData.projects.ycyw;

    const mainImg = [
        "/images/projects/ycyw/cover.png",
        "/images/projects/ycyw/login.png",
        "/images/projects/ycyw/chat.png",
    ];

    const setColor = useAppStore((state) => state.setColor);

    useEffect(() => {
        setColor('blue');
        return () => setColor('blue');
    }, []);

    return (
        <Curve>
            <Head>
                <title>{project.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 px-4 md:px-6 ">
                <Heading project={project} color="blue"/>
                <MainImage gallery={mainImg}/>
            </div>

            <Footer color="blue"/>
        </Curve>
    );
}