"use client";
import useAppStore from "@/store/store";
import {gsap} from "gsap";
import {MenuCloseButton} from "@/components/global/Header/MenuOpenButton";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useGSAP} from "@gsap/react";

export default function Menu() {
    const isMenuOpen = useAppStore(state => state.menuIsOpen);
    const setMenuIsOpen = useAppStore(state => state.setMenuIsOpen);

    useGSAP(() => {
        if (isMenuOpen) {
            gsap.to(".js-menu", {
                duration: .5,
                autoAlpha: 1,
                display: "flex",
            });
        } else {
            gsap.to(".js-menu", {
                duration: .5,
                autoAlpha: 0,
            });
        }
    }, [isMenuOpen]);

    const hideMenu = () => {
        gsap.set(".js-menu", {
            delay: 1,
            autoAlpha: 0,
            onComplete: () => {
                setMenuIsOpen(false);
            }
        });
    }

    return (
        <div className="js-menu hidden fixed z-50 top-0 h-screen bg-black w-full flex-col justify-between p-4 md:p-6">
            <div className="flex justify-between w-full">
                <span className="text-white md:text-lg font-primary">S. TESSARD</span>
                <MenuCloseButton/>
            </div>
            <div className="flex justify-between">

                <div className="flex flex-col justify-end">
                    <div className="flex flex-wrap items-center md:max-w-xl xl:max-w-4xl gap-y-2 xl:gap-y-4 gap-x-6 md:gap-x-7 xl:gap-x-8 self-end w-full mb-12 md:mb-20">
                        <MenuLink href="/" text="accueil" hideMenu={hideMenu}/>
                        <span className="block size-3 md:size-4 xl:size-4 bg-white rounded-full"/>
                        <MenuLink href="/projects" text="projets" hideMenu={hideMenu}/>
                        <MenuLink href="/about" text="à propos" hideMenu={hideMenu}/>
                    </div>
                    <div className="flex gap-6 md:gap-8 text-white font-primary font-medium uppercase w-full">
                        <a href="https://www.linkedin.com/in/simon-tessard-138733198/" target="_blank">LinkedIn</a>
                        <a href="mailto:pro@simontessard.fr" target="_blank">Email</a>
                    </div>
                </div>

                <img src="https://picsum.photos/1000/1000" alt="Logo" className="max-lg:hidden aspect-[9/16] object-cover size-full max-w-sm"/>

            </div>
        </div>
    )
}

function MenuLink({href, text, hideMenu} : {href: string, text: string, hideMenu: () => void}) {
    const pathname = usePathname();
    return (
        <Link onClick={hideMenu} href={href} className={`relative group overflow-hidden text-white tracking-tight font-primary py-2 uppercase text-4xl md:text-5xl xl:text-7xl`}>
            {text}
            {pathname === href &&
                <span className="absolute top-0 bottom-0 my-auto bg-white block h-1 xl:h-1.5 w-full"/>
            }
            {pathname != href &&
                <span className="absolute top-0 bottom-0 -left-full my-auto bg-white block h-1 xl:h-1.5 w-full md:group-hover:translate-x-full transition-transform duration-300"/>
            }
        </Link>
    )
}