export default function PageTitle({ title, className }: { title: string, className?: string }) {
    return (
        <h1 className={`font-primary text-primary tracking-tight
        font-medium text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase ${className}`}>
            {title}
        </h1>
    )
}