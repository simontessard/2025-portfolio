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

    return (
        <div
            onMouseEnter={() => setIsOpen(!isOpen)}
            onMouseLeave={() => setIsOpen(!isOpen)}
            className="relative">
            <button style={{ color }} className="cursor-none flex items-center font-semibold gap-1 md:hover:opacity-70 transition-opacity">
                <span>{LANGUAGES[locale as keyof typeof LANGUAGES].name}</span>
                <ChevronDown
                    size={17}
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full pt-2 bg-white shadow-lg min-w-[80px]"
                    style={{ borderColor: color }}
                >
                    {Object.values(LANGUAGES).map((lang) => (
                        <button
                            key={lang.locale}
                            onClick={() => {
                                setLocale(lang.locale);
                                setIsOpen(false);
                            }}
                            style={{ color: locale === lang.locale ? color : 'inherit' }}
                            className="cursor-none w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors"
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}