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
            <header className="fixed z-50 top-0 flex justify-between w-full p-4 md:p-6">
                <Link href="/" className="header-logo text-primary md:text-lg font-primary">
                    S. TESSARD
                </Link>
                <MenuOpenButton/>
            </header>
            <Menu/>
        </>
    )
}