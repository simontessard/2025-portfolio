interface ProjectLinkProps {
    url: string;
    text?: string;
    textStyle?: React.CSSProperties;
}

export default function ProjectLink({ url, text = "Voir le projet", textStyle = {} } : ProjectLinkProps)  {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-fit flex items-center gap-2 font-medium uppercase md:text-lg xl:text-xl"
        >
            <span style={textStyle}>
               {text}
            </span>
            <svg
                style={textStyle}
                className="shrink-0 rotate-45 w-6 h-6 md:w-[1.65rem] md:h-[1.65rem] md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5 duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 82 82"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                    fill="currentColor"
                />
            </svg>
        </a>
    );
};