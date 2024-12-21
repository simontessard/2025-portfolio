import useAppStore from "@/store/store";

export default function MenuOpenButton() {
    const setMenuIsOpen = useAppStore((state) => state.setMenuIsOpen);
    const openMenu = () => {
        setMenuIsOpen(true);
    }
    return (
        <button onClick={openMenu} className="fixed z-50 top-4 right-4 md:top-6 md:right-6 size-fit uppercase md:text-lg tracking-tight font-primary text-primary">
            Menu
        </button>
    )
}

export function MenuCloseButton() {
    const setMenuIsOpen = useAppStore((state) => state.setMenuIsOpen);
    const closeMenu = () => {
        setMenuIsOpen(false);
    }
    return (
        <button onClick={closeMenu} className="size-fit uppercase md:text-lg tracking-tight font-primary text-white">
            Fermer
        </button>
    )
}