"use client";
import MenuOpenButton from "@/components/global/Header/MenuOpenButton";
import Menu from "@/components/global/Header/Menu";
import Link from "next/link";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

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
                <Link href="/" className="header-logo no-image fixed z-50 top-4 left-3.5 md:top-6 md:left-6 text-primary md:text-lg font-primary">
                    S. TESSARD
                </Link>
                <MenuOpenButton/>
            </header>
            <Menu/>
        </>
    )
}