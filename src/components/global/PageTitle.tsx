export default function PageTitle({ title }: { title: string }) {
    return (
        <h1 className="font-primary text-primary tracking-tight font-medium text-5xl md:text-8xl uppercase mb-8 md:mb-16">
            {title}
        </h1>
    )
}