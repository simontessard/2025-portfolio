interface ImagesDescProps {
    title?: string;
    description?: string;
}

export default function ImagesDesc( {title, description}: ImagesDescProps ) {
    return (
        <div className="flex flex-col gap-2 mb-8 md:mb-12">
            <h1 className="font-primary text-xl md:text-2xl xl:text-4xl uppercase tracking-tight text-primary max-w-md font-medium mb-2 md:mb-4">
                {title}
            </h1>
            <p className="font-primary text-sm md:text-lg md:leading-6 md:max-w-xl 2xl:max-w-2xl uppercase text-primary">
                {description}
            </p>
        </div>
    )
}