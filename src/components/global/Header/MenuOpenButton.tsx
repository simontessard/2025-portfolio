import { openMenuFunction, closeMenuFunction } from './Menu/menu';

export default function MenuOpenButton() {
    return (
        <button onClick={openMenuFunction} className="cursor-none group overflow-hidden fixed z-50 top-4 right-4 md:top-6 md:right-6 size-fit uppercase md:text-lg md:leading-4 tracking-tight font-primary text-primary">
            <span className="relative">
                Menu
                <span className="absolute top-0 bottom-0 -left-full my-auto bg-primary block h-0.5 w-full md:group-hover:translate-x-full transition-transform duration-300"/>
            </span>
        </button>
    )
}

export function MenuCloseButton() {
    return (
        <button onClick={closeMenuFunction} className="cursor-none relative group overflow-hidden size-fit uppercase md:text-lg md:leading-4 tracking-tight font-primary text-white">
             Fermer
             <span className="absolute top-0 bottom-0 left-0 my-auto bg-white block h-0.5 w-full"/>
        </button>
    )
}