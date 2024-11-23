import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col border-t-2 border-t-primary pt-8 pb-6 mx-4 md:mx-6 mt-8 md:mt-20">
            <div className="flex flex-wrap items-center gap-y-6 xl:gap-y-8 gap-x-6 md:gap-x-8 xl:gap-x-10
                w-full text-primary tracking-tight font-primary uppercase text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-6">
                <Link href="/">Accueil</Link>
                <span className="block size-3 md:size-4 xl:size-5 bg-primary rounded-full"/>
                <Link href="/projects">Projets</Link>
                <span className="block size-3 md:size-4 xl:size-5 bg-primary rounded-full"/>
                <Link href="/about">À propos</Link>
                <span className="block size-3 md:size-4 xl:size-5 bg-primary rounded-full"/>
                <Link href="/test">Test</Link>
            </div>
            <div className="flex gap-6 text-primary font-medium uppercase w-full">
            <p>LinkedIn</p>
                <p>Email</p>
            </div>
        </footer>
    )
}