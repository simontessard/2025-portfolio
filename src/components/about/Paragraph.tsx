interface ParagraphProps {
    text: string;
    className?: string;
}

export default function Paragraph({text, className}: ParagraphProps) {
    return (
        <p className={`leading-7 lg:text-xl lg:leading-8 2xl:leading-9 md:max-w-6xl uppercase text-primary lg:font-medium ${className}`}>
            {text}
        </p>
    )
}