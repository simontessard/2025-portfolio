"use client";
import Link from "next/link";
import {useLenis} from "lenis/react";
import {usePathname} from "next/navigation";
import FooterLink from "@/components/global/Footer/FooterLink";

export default function Footer() {
    const lenis = useLenis(({ scroll }) => {})

    return (
        <footer className="flex flex-col border-t-2 border-t-primary pt-6 pb-4 mx-3.5 md:mx-6 mt-8 md:mt-16 xl:mt-20">

            <div className="flex flex-col gap-6 md:gap-4 mb-6 md:mb-10">
                <div className="flex items-start justify-between w-full">

                    <div className="flex flex-col">
                        <div className="flex max-md:flex-col flex-wrap md:items-center gap-y-3 md:gap-y-4 xl:gap-y-8 gap-x-6 md:gap-x-7 w-full mb-3">
                            <FooterLink href="/" text="Accueil"/>
                            <span className="hidden md:block size-3 md:size-3.5 xl:size-4 bg-primary rounded-full"/>
                            <FooterLink href="/projects" text="Projets"/>
                        </div>

                        <FooterLink href="/about" text="À propos"/>
                    </div>

                    <button onClick={() => lenis?.scrollTo('#top', {lerp: 0.01})} className="md:hover:-translate-y-2 transition-transform duration-300">
                        <svg className="shrink-0 size-12 md:size-16 xl:size-20 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z" fill="currentColor"/>
                        </svg>
                    </button>

                </div>

            </div>

            <div className="flex gap-5 font-primary text-primary uppercase w-full">
                <Link href="https://www.linkedin.com/in/simon-tessard-138733198/" target="_blank">
                    LinkedIn
                </Link>
                <Link href="mailto:pro@simontessard.fr" target="_blank">
                    Email
                </Link>
            </div>

        </footer>
    )
}