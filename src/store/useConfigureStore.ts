import { create } from 'zustand';

interface State {
    theme: string;
    lang: string;
}

interface Action {
    setTheme: (theme: string) => void;
    setLang: (lang: string) => void;
}

const useConfigStore = create<State & Action>((set) => ({
    theme: 'light',
    lang: 'zh-CN',
    setLang: (lang: string) => set({ lang }),
    setTheme: (theme: string) => set({ theme }),
}));

export default useConfigStore;
