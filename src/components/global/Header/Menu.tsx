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
        <div className="js-menu hidden fixed z-50 top-0 h-[100dvh] md:h-screen bg-black w-full flex-col justify-between p-3.5 md:p-6">

            <div className="flex justify-between w-full">
                <span className="text-white md:text-lg font-primary">S. TESSARD</span>
                <MenuCloseButton/>
            </div>

            <div className="flex justify-between">

                <div className="flex flex-col justify-end">
                    <div className="js-menu-link opacity-0 flex flex-wrap items-center md:max-w-xl xl:max-w-4xl gap-y-2 xl:gap-y-4 gap-x-6 md:gap-x-7 xl:gap-x-8 self-end w-full mb-12 md:mb-20">
                        <MenuLink href="/" text="accueil" hideMenu={hideMenu}/>
                        <span className="block size-3 md:size-4 xl:size-4 bg-white rounded-full"/>
                        <MenuLink href="/projects" text="projets" hideMenu={hideMenu}/>
                        <MenuLink href="/about" text="à propos" hideMenu={hideMenu}/>
                    </div>
                    <div className="flex gap-6 md:gap-8 text-white font-primary font-medium uppercase w-full">
                        <Link scroll={false} href="https://www.linkedin.com/in/simon-tessard-138733198/" target="_blank">
                            LinkedIn
                        </Link>
                        <Link scroll={false} href="mailto:pro@simontessard.fr" target="_blank">
                            Email
                        </Link>
                    </div>
                </div>

                <img src="https://picsum.photos/1000/1000" alt="Logo" className="max-lg:hidden aspect-[9/16] object-cover size-full max-w-sm"/>

            </div>
        </div>
    )
}