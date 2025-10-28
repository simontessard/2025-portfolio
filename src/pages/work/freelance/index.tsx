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
    const project = projectsData.projects.freelance;

    const mainImg = [
        "/images/projects/freelance/square/hero.jpg",
        "/images/projects/freelance/large/transform.jpg",
        "/images/projects/freelance/large/projects.jpg",
    ];

    const setColor = useAppStore((state) => state.setColor);

    useEffect(() => {
        setColor('#0000c1');
        return () => setColor('#0156cf');
    }, []);

    return (
        <Curve>
            <Head>
                <title>{project.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 px-4 md:px-6 ">
                <Heading project={project} color="#0000c1"/>
                <MainImage gallery={mainImg}/>
            </div>

            <Footer color="#0000c1"/>
        </Curve>
    );
}