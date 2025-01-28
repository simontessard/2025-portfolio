interface ImagesDescProps {
    title?: string;
    description?: string;
    color?: string;
}

export default function ImagesDesc({ title, description, color = "#0156cf" }: ImagesDescProps) {
    return (
        <div className="flex flex-col gap-2 mb-8 md:mb-12">
            <h1 style={{ color }} className="font-primary text-xl md:text-2xl xl:text-4xl uppercase tracking-tight md:max-w-lg font-medium mb-2 md:mb-4">
                {title}
            </h1>
            <p style={{ color }} className="font-primary text-sm md:text-lg md:leading-6 md:max-w-xl 2xl:max-w-2xl uppercase">
                {description}
            </p>
        </div>
    )
}