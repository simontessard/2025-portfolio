import { create } from 'zustand';

interface AppState {
    menuIsOpen: boolean;

    setMenuIsOpen: (value: boolean) => void;
}

const useAppStore = create<AppState>((set) => ({
    menuIsOpen: false,

    setMenuIsOpen: (value) => set({ menuIsOpen: value }),
}));

export default useAppStore;