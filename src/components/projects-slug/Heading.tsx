import Link from "next/link";

export default function Heading({project} : {project: any}) {
    return (
        <>
            <div className="flex flex-col w-full">

                <div className="flex max-xl:flex-col justify-between mb-8 md:mb-12">

                    <div className="mb-10 xl:mb-0">
                        {/* Title */}
                        <div className="flex gap-2 items-start mb-8 md:mb-12">
                            <h1 className="font-primary text-4xl md:text-6xl xl:text-8xl uppercase tracking-tight text-primary font-medium">
                                {project.title}
                            </h1>
                            <p className="font-secondary italic md:text-xl text-primary mt-1 xl:mt-2.5">
                                {project.date}
                            </p>
                        </div>

                        {/* Desc */}
                        <p className="font-primary text-lg md:text-xl md:leading-8 md:max-w-4xl 2xl:max-w-4xl uppercase text-primary">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex gap-12 lg:gap-12 xl:gap-14 2xl:gap-24 2xl:w-1/3">
                        <div className="flex flex-col">
                            <p className="font-secondary md:text-xl text-primary uppercase italic mb-2 md:mb-2.5 xl:mb-4">Service</p>
                            <p className="font-primary uppercase text-primary max-md:text-sm mb-1 md:mb-1.5">Intégration front</p>
                            <p className="font-primary uppercase text-primary max-md:text-sm">Création back-office</p>
                        </div>

                        <div className="flex flex-col">
                            <p className="font-secondary md:text-xl text-primary uppercase italic mb-2 md:mb-2.5 xl:mb-4">Client</p>
                            <p className="font-primary uppercase text-primary max-md:text-sm">Cobalt Studio</p>
                        </div>

                    </div>

                </div>

                <Link href="https://inivatourism.com/" target="_blank"
                      className="group size-fit flex items-center gap-2 font-primary uppercase text-lg md:text-xl xl:text-2xl text-primary font-semibold">
                    Visiter le site
                    <svg
                        className="shrink-0 rotate-45 size-6 md:size-7 xl:size-8 md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5 duration-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                              fill="currentColor"
                        />
                    </svg>
                </Link>

            </div>

            <span className="block h-0.5 w-full bg-primary mt-7 md:mt-10 mb-8 md:mb-14"></span>

        </>
    )
}