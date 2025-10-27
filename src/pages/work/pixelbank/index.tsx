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
    const project = projectsData.projects.pixelbank;

    const mainImg = [
        "/images/projects/pixelbank/pixelbank-cover.jpg",
        "/images/projects/pixelbank/large/dashboard.png",
        "/images/projects/pixelbank/large/transfers.png",
    ];

    const desktopImg = [
        "/images/projects/pixelbank/large/dashboard.png",
        "/images/projects/pixelbank/large/create.jpg",
        "/images/projects/pixelbank/pixelbank-cover.jpg",
    ];

    const phoneImg = [
        "/images/projects/pixelbank/large/transfers.png",
        "/images/projects/pixelbank/large/mobile.png",
        "/images/projects/pixelbank/large/transactions.jpg",
    ];

    const setColor = useAppStore((state) => state.setColor);

    useEffect(() => {
        setColor('green');
        return () => setColor('#0156cf');
    }, []);

    return (
        <Curve>
            <Head>
                <title>{project.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 px-4 md:px-6 ">
                <Heading project={project} color="green"/>
                <MainImage gallery={mainImg}/>

                <GalleryDesktop
                    gallery={desktopImg}
                    color="green"
                    title={project.sections.experience.title}
                    desc={project.sections.experience.description}
                />

                <GalleryMobile
                    gallery={phoneImg}
                    color="green"
                    title={project.sections.interaction.title}
                    desc={project.sections.interaction.description}
                />
            </div>

            <Footer color="green"/>
        </Curve>
    );
}