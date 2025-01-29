"use client";
import MenuOpenButton from "@/components/global/Header/MenuOpenButton";
import Menu from "@/components/global/Header/Menu";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import LocalTime from "@/components/global/Header/LocalTime";
import BackHome from "@/components/global/Header/BackHome";
import LanguageSwitch from "@/components/global/LanguageSwitch";

export default function Header() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to('.header-logo', {
            scrollTrigger: {
                trigger: '.header-logo',
                start: '=+70px',
                scrub: 1,
            },
            duration: .5,
            autoAlpha: 0,
        })
    })

    return (
        <>
            <header>
                <BackHome/>
                <MenuOpenButton />
                <LocalTime />
            </header>
            <Menu />
        </>
    )
}