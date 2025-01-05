"use client";
import {gsap} from "gsap";
import {MenuCloseButton} from "@/components/global/Header/MenuOpenButton";
import MenuLink from "@/components/global/Header/MenuLink";
import Link from "next/link";
import {hideMenu} from './Menu/menu'
import {useGSAP} from "@gsap/react";

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
                <span className="text-white md:text-lg font-primary">S. TESSARD</span>
                <MenuCloseButton/>
            </div>

            <div className="flex max-lg:flex-col-reverse justify-between max-lg:pt-8 max-lg:gap-10 max-lg:h-full">

                <div className="shrink-0 flex flex-col justify-end">
                    <div className="js-menu-links -translate-y-1 opacity-0 flex max-lg:flex-col flex-wrap lg:items-center lg:max-w-xl xl:max-w-4xl gap-y-2 xl:gap-y-4 gap-x-6 md:gap-x-7 xl:gap-x-8 self-end w-full mb-12 md:mb-20">
                        <MenuLink href="/" text="accueil" hideMenu={hideMenu}/>
                        <span className="hidden lg:block size-3 md:size-4 xl:size-4 bg-white rounded-full"/>
                        <MenuLink href="/projects" text="projets" hideMenu={hideMenu}/>
                        <MenuLink href="/about" text="à propos" hideMenu={hideMenu}/>
                    </div>
                    <div className="js-menu-contact -translate-y-1 opacity-0 flex gap-5 text-white font-primary font-medium uppercase w-full">
                        <Link scroll={false} href="https://www.linkedin.com/in/simon-tessard-138733198/" target="_blank">
                            LinkedIn
                        </Link>
                        <Link scroll={false} href="mailto:pro@simontessard.fr" target="_blank">
                            Email
                        </Link>
                    </div>
                </div>

                <img src="/images/simon.png" alt="Logo" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
                     className="js-menu-img lg:aspect-[9/16] object-cover w-full h-1/2 sm:hidden lg:block lg:h-2/3 md:mt-auto max-lg:w-2/3 lg:max-w-md"/>

            </div>
        </div>
    )
}