interface ParagraphProps {
    text: string;
}

export default function Paragraph({text}: ParagraphProps) {
    return (
        <p className="text-lg lg:text-xl md:leading-8 md:max-w-6xl uppercase text-primary lg:font-medium mb-8">
            {text}
        </p>
    )
}