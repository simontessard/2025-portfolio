import useAppStore from "@/store/store";

export default function MenuOpenButton() {
    const setMenuIsOpen = useAppStore((state) => state.setMenuIsOpen);
    const openMenu = () => {
        setMenuIsOpen(true);
    }
    return (
        <button onClick={openMenu} className="no-image fixed z-50 top-4 right-3.5 md:top-6 md:right-6 size-fit uppercase md:text-lg md:leading-4 tracking-tight font-primary text-primary">
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
        <button onClick={closeMenu} className="size-fit uppercase md:text-lg md:leading-4 tracking-tight font-primary text-white">
            Fermer
        </button>
    )
}