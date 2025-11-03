interface PageTitleProps {
    title: string;
    secondWords?: string;
    className?: string;
}

export default function PageTitle({ title, secondWords, className}: PageTitleProps ) {
    return (
        <h1 className={`font-primary text-primary tracking-tight 2xl:-translate-x-1.5
        font-medium leading-8 lg:leading-10 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase ${className}`}>
            {title}
            {secondWords && <span className="inline-block ml-1.5 md:ml-3 lg:ml-4 xl:ml-5 2xl:ml-6 font-secondary text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                {secondWords}
            </span>}
        </h1>
    )
}