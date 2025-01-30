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
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{ color }}
                className="cursor-none flex items-center font-semibold gap-1 md:hover:opacity-70 transition-opacity"
            >
                <span>{LANGUAGES[locale as keyof typeof LANGUAGES].name}</span>
                <ChevronDown
                    size={16}
                    className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div
                    className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-1 min-w-[80px]"
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
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}