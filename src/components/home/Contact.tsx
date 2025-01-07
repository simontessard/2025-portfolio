import Link from "next/link";

export default function Contact() {
    return (
        <div className="flex gap-6 max-lg:ml-auto text-primary font-primary font-medium uppercase xl:translate-y-1.5">
            <Link scroll={false} href="https://www.linkedin.com/in/simon-tessard-138733198/"
                  target="_blank">
                LinkedIn
            </Link>
            <Link scroll={false} href="mailto:pro@simontessard.fr" target="_blank">
                Email
            </Link>
        </div>
    )
}