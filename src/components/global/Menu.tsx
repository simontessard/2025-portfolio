"use client";
import useAppStore from "@/store/store";
import {gsap} from "gsap";
import {useEffect} from "react";
import {MenuCloseButton} from "@/components/global/MenuOpenButton";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Menu() {
    const isMenuOpen = useAppStore(state => state.menuIsOpen);
    const setMenuIsOpen = useAppStore(state => state.setMenuIsOpen);

    useEffect(() => {
        if (isMenuOpen) {
            gsap.to(".menu", {
                duration: .7,
                autoAlpha: 1,
            });
        } else {
            gsap.to(".menu", {
                duration: .7,
                autoAlpha: 0,
            });
        }
    }, [isMenuOpen]);

    const hideMenu = () => {
        gsap.set(".menu", {
            delay: 1,
            autoAlpha: 0,
            onComplete: () => {
                setMenuIsOpen(false);
            }
        });
    }

    return (
        <div className="menu fixed z-10 top-0 h-screen bg-primary w-full flex flex-col justify-between p-4 lg:p-6">
            <div className="flex justify-end w-full">
                <MenuCloseButton/>
            </div>
            <div className="flex justify-between">

                <div className="flex flex-col justify-end">
                    <div className="flex flex-wrap items-center max-w-xl gap-y-6 gap-x-8 self-end w-full mb-12 md:mb-20">
                        <MenuLink href="/" text="accueil" hideMenu={hideMenu}/>
                        <span className="block size-4 bg-white rounded-full"/>
                        <MenuLink href="/projects" text="projets" hideMenu={hideMenu}/>
                        <MenuLink href="/about" text="à propos" hideMenu={hideMenu}/>
                    </div>
                    <div className="flex gap-6 text-white font-medium uppercase w-full">
                        <p>LinkedIn</p>
                        <p>Email</p>
                    </div>
                </div>

                <img src="https://picsum.photos/1000/1000" alt="Logo" className="max-lg:hidden object-cover size-full max-w-sm"/>

            </div>
        </div>
    )
}

function MenuLink({href, text, hideMenu}) {
    const pathname = usePathname();
    return (
        <Link onClick={hideMenu} href={href} className={`relative text-white tracking-tight font-primary uppercase text-4xl md:text-5xl xl:text-6xl`}>
            {text}
            {pathname === href &&
                <span className="absolute top-0 bottom-0 my-auto bg-white block h-2 w-full"/>}
        </Link>
    )
}