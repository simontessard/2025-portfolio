"use client";
import {useLenis} from "lenis/react";
import FooterLink from "@/components/global/Footer/FooterLink";
import LinkHover from "@/components/global/LinkHover";

interface FooterProps {
    color?: string;
}

export default function Footer({ color = "#0156cf" }: FooterProps) {
    const lenis = useLenis(({ scroll }) => {})

    return (
        <footer
            style={{ borderTopColor: color }}
            className="flex flex-col border-t-2 pt-6 pb-3.5 mx-4 md:mx-6 mt-8 md:mt-16 xl:mt-20"
        >
            <div className="flex flex-col gap-6 md:gap-4 mb-6 md:mb-10">
                <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col">
                        <div className="flex max-md:flex-col flex-wrap md:items-center gap-y-3 md:gap-y-4 xl:gap-y-8 gap-x-6 md:gap-x-7 w-full mb-3">
                            <FooterLink href="/" text="Accueil" color={color}/>
                            <span
                                style={{ backgroundColor: color }}
                                className="hidden md:block size-3 md:size-3.5 xl:size-4 rounded-full"
                            />
                            <FooterLink href="/work" text="Mon travail" color={color}/>
                        </div>

                        <div className="flex max-md:flex-col flex-wrap md:items-center gap-y-3 md:gap-y-4 xl:gap-y-8 gap-x-6 md:gap-x-7 w-full">
                            <FooterLink href="/about" text="à propos" color={color}/>
                        </div>
                    </div>

                    <button
                        onClick={() => lenis?.scrollTo('#top', {lerp: 0.01})}
                        className="md:hover:-translate-y-2 transition-transform duration-300"
                    >
                        <svg
                            style={{ color }}
                            className="shrink-0 size-12 md:size-16 xl:size-20 2xl:size-24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 82 82">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div style={{ color }} className="flex items-end justify-between font-primary w-full">
                <div className="flex max-md:flex-col gap-2 md:gap-5 uppercase">
                    <LinkHover text="LinkedIn" href="https://www.linkedin.com/in/simon-tessard-138733198/"/>
                    <LinkHover text="Email" href="mailto:pro@simontessard.fr"/>
                    <LinkHover text="Tel" href="tel:0783263684"/>
                    <LinkHover text="Github" href="https://github.com/simontessard"/>
                </div>
                <span className="text-xs font-primary">Simon TESSARD © 2025</span>
                <a href="https://github.com/simontessard/2025-portfolio" target="_blank"
                   className="text-xs md:text-sm uppercase font-primary">
                    Créé avec NextJS.
                </a>
            </div>

        </footer>
    )
}