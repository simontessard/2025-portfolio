import { create } from 'zustand';

interface AppState {
    entranceIsDone: boolean;
    color: string;

    setEntranceIsDone: (value: boolean) => void;
    setColor: (color: string) => void;
}

const useAppStore = create<AppState>((set) => ({
    entranceIsDone: false,
    color: '#0156cf',

    setEntranceIsDone: (value) => set({ entranceIsDone: value }),
    setColor: (color) => set({ color }),
}));

export default useAppStore;