import Link from "next/link";
import useAppStore from "@/store/store";


export default function BackHome() {
    const color = useAppStore((state) => state.color);

    return (
        <Link
            scroll={false}
            href="/"
            style={{ color }}
            className="header-logo fixed z-50 top-4 left-4 md:top-6 md:left-6 md:text-lg font-primary"
        >
            SIMON TESSARD
        </Link>
    )
}