export default function Available() {
    return (
        <div className="inline-flex items-center gap-2 md:gap-2.5">
            <span className="inline-block rounded-full size-2 animate-pulse bg-green-500"/>
            <span className="inline-flex gap-1 md:gap-1.5 xl:gap-2 md:text-xl xl:text-2xl text-primary font-primary font-light uppercase">
                <span>Disponible</span>
                <span>en</span>
                <span>Freelance</span>
            </span>
        </div>
    )
}