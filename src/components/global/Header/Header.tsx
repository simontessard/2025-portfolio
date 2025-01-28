"use client";
import MenuOpenButton from "@/components/global/Header/MenuOpenButton";
import Menu from "@/components/global/Header/Menu";
import Link from "next/link";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import LocalTime from "@/components/global/Header/LocalTime";

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
                <Link href="/" className="header-logo fixed z-50 top-4 left-4 md:top-6 md:left-6 text-primary md:text-lg font-primary">
                    SIMON T.
                </Link>
                <MenuOpenButton/>
                <LocalTime/>
            </header>
            <Menu/>
        </>
    )
}