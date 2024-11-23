export default function PageTitle({ title }: { title: string }) {
    return (
        <h1 className="max-lg:text-center font-primary text-primary tracking-tight font-medium text-4xl lg:text-7xl xl:text-8xl uppercase mb-8 md:mb-16">
            {title}
        </h1>
    )
}