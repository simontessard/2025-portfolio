import { create } from 'zustand';

interface AppState {
    menuIsOpen: boolean;
    entranceIsDone: boolean;

    setMenuIsOpen: (value: boolean) => void;
    setEntranceIsDone: (value: boolean) => void;
}

const useAppStore = create<AppState>((set) => ({
    menuIsOpen: false,
    entranceIsDone: false,

    setMenuIsOpen: (value) => set({ menuIsOpen: value }),
    setEntranceIsDone: (value) => set({ entranceIsDone: value }),
}));

export default useAppStore;