"use client";
import {gsap} from "gsap";
import {MenuCloseButton} from "@/components/global/Header/MenuOpenButton";
import MenuLink from "@/components/global/Header/MenuLink";
import Link from "next/link";
import {useGSAP} from "@gsap/react";
import HomeLink from "@/components/global/Header/HomeLink";
import Image from "next/image";
import LinkHover from "@/components/global/LinkHover";

export default function Menu() {

    useGSAP(() => {
        gsap.set(".js-menu", {
            autoAlpha: 0,
            display: "none",
        });
    }, []);

    return (
        <div className="js-menu hidden fixed z-50 top-0 h-[100dvh] md:h-screen bg-black w-full flex-col justify-between p-4 md:p-6">

            <div className="flex justify-between w-full">
                <HomeLink/>
                <MenuCloseButton/>
            </div>

            <div className="flex max-lg:flex-col-reverse justify-between max-lg:pt-8 max-lg:gap-10 h-full">

                <div className="mt-auto">

                    <div className="flex max-lg:flex-col flex-wrap lg:items-center lg:max-w-xl xl:max-w-4xl gap-y-2 xl:gap-y-4 gap-x-6 md:gap-x-7 xl:gap-x-8 self-end w-full mb-12 md:mb-20">
                        <MenuLink href="/" text="accueil"/>
                        <span
                            className="js-menu-link -translate-y-1 opacity-0 hidden lg:block size-3 md:size-4 xl:size-4 bg-white rounded-full"/>
                        <MenuLink href="/work" text="Mon travail"/>
                        <MenuLink href="/about" text="à propos"/>
                        <span className="js-menu-link -translate-y-1 opacity-0 hidden lg:block size-3 md:size-4 xl:size-4 bg-white rounded-full"/>
                        <MenuLink href="/blog" text="Blog"/>
                    </div>

                    <div
                        className="js-menu-contact -translate-y-1 opacity-0 flex gap-5 xl:gap-6 text-white font-primary font-medium uppercase w-full">
                        <LinkHover text="LinkedIn" href="https://www.linkedin.com/in/simon-tessard-138733198/"/>
                        <LinkHover text="Email" href="mailto:pro@simontessard.fr"/>
                    </div>

                </div>

                <Image width={1000} height={1000} src="/images/simon.png" alt="Logo" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
                     className="js-menu-img lg:aspect-[9/16] object-cover w-52 md:w-1/3 lg:w-full h-72 md:h-96 lg:h-[400px] xl:h-[500px] 2xl:h-[550px] md:mt-auto lg:max-w-md"/>

            </div>
        </div>
    )
}