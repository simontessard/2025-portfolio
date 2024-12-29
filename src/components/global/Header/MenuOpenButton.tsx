import { openMenuFunction, closeMenuFunction } from './Menu/menu';

export default function MenuOpenButton() {
    return (
        <button onClick={openMenuFunction} className="no-image fixed z-50 top-4 right-3.5 md:top-6 md:right-6 size-fit uppercase md:text-lg md:leading-4 tracking-tight font-primary text-primary">
            Menu
        </button>
    )
}

export function MenuCloseButton() {
    return (
        <button onClick={closeMenuFunction} className="size-fit uppercase md:text-lg md:leading-4 tracking-tight font-primary text-white">
            Fermer
        </button>
    )
}