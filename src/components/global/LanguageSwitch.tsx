import { Globe } from 'lucide-react';
import { useLocaleStore } from "@/store/useLocaleStore";
import useAppStore from "@/store/store";

export default function LanguageSwitch() {
    const { locale, setLocale } = useLocaleStore();
    const color = useAppStore((state) => state.color);

    const toggleLocale = () => {
        setLocale(locale === 'fr' ? 'en' : 'fr');
    };

    return (
        <button
            onClick={toggleLocale}
            className="cursor-none flex items-center gap-1 md:hover:opacity-70 transition-opacity"
            style={{ color }}
        >
            <Globe size={16} />
            <span>{locale.toUpperCase()}</span>
        </button>
    );
}