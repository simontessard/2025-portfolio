import LinkHover from "@/components/global/LinkHover";

export default function Contact() {
    return (
        <div className="flex gap-6 max-lg:ml-auto size-fit text-primary font-primary font-medium uppercase xl:translate-y-1.5">
            <LinkHover text="LinkedIn" href="https://www.linkedin.com/in/simon-tessard-138733198/"/>
            <LinkHover text="Email" href="mailto:pro@simontessard.fr"/>
            <LinkHover text="Tel" href="tel:0783263684"/>
        </div>
    )
}