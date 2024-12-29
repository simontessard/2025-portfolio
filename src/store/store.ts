import { create } from 'zustand';

interface AppState {
    entranceIsDone: boolean;

    setEntranceIsDone: (value: boolean) => void;
}

const useAppStore = create<AppState>((set) => ({
    entranceIsDone: false,

    setEntranceIsDone: (value) => set({ entranceIsDone: value }),
}));

export default useAppStore;