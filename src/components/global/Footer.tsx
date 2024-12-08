"use client";
import Link from "next/link";
import {useLenis} from "lenis/react";

export default function Footer() {
    const lenis = useLenis(({ scroll }) => {})

    return (
        <footer className="flex flex-col border-t-2 border-t-primary pt-8 pb-4 mx-4 md:mx-6 mt-8 md:mt-16 xl:mt-20">

            <div className="flex flex-col gap-6 md:gap-4 text-primary tracking-tight font-primary uppercase text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-6 md:mb-8">
                <div className="flex items-start">
                    <div className="flex max-md:flex-col flex-wrap md:items-center gap-y-6 xl:gap-y-8 gap-x-6 md:gap-x-8 xl:gap-x-7
                w-full">

                        <Link href="/" scroll={false}>Accueil</Link>
                        <span className="hidden md:block size-3 md:size-3.5 bg-primary rounded-full"/>
                        <Link href="/projects" scroll={false}>Projets</Link>

                    </div>

                    <button onClick={() => lenis.scrollTo('#top', {lerp: 0.01})}>
                        <svg className="size-10 md:size-12 -rotate-90 stroke-primary"
                             width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                <Link href="/about" scroll={false}>À propos</Link>
            </div>


            <div className="flex max-md:justify-center gap-6 text-primary font-medium uppercase w-full">
                <p>LinkedIn</p>
                <p>Email</p>
            </div>

        </footer>
    )
}