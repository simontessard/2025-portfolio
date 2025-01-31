import { ChevronDown } from 'lucide-react';
import { useLocaleStore } from "@/store/useLocaleStore";
import useAppStore from "@/store/store";
import { useState } from 'react';

const LANGUAGES = {
    fr: { name: 'FR', locale: 'fr' },
    en: { name: 'EN', locale: 'en' }
};

export default function LanguageSwitch() {
    const [isOpen, setIsOpen] = useState(false);
    const { locale, setLocale } = useLocaleStore();
    const color = useAppStore((state) => state.color);

    // Filtrer les langues pour n'afficher que celles qui ne sont pas actuellement sélectionnées
    const availableLanguages = Object.values(LANGUAGES).filter(
        (lang) => lang.locale !== locale
    );

    return (
        <div
            onMouseEnter={() => setIsOpen(!isOpen)}
            onMouseLeave={() => setIsOpen(!isOpen)}
            className="relative"
        >
            <button
                style={{ color }}
                className="cursor-none flex items-center font-semibold gap-1 md:hover:opacity-70 transition-opacity"
            >
                <span>{LANGUAGES[locale as keyof typeof LANGUAGES].name}</span>
                <ChevronDown
                    size={17}
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div
                    className="absolute top-full bg-white min-w-[80px]"
                    style={{ borderColor: color }}
                >
                    {availableLanguages.map((lang) => (
                        <button
                            key={lang.locale}
                            onClick={() => {
                                setLocale(lang.locale);
                                setIsOpen(false);
                            }}
                            className="cursor-none w-full pr-4 text-left md:hover:opacity-75 transition-opacity"
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}