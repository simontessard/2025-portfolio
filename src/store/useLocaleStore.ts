// stores/useLocaleStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type LocaleStore = {
    locale: string;
    setLocale: (locale: string) => void;
};

export const useLocaleStore = create<LocaleStore>()(
    persist(
        (set) => ({
            locale: 'fr',
            setLocale: (locale) => set({ locale }),
        }),
        {
            name: 'locale-storage',
        }
    )
);