import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import config from "@/utils/config.ts";

export type CustomizationState = {
    isOpen: string[];
    defaultId: string;
    scheme: 'dark' | 'light';
    fontFamily: string;
    borderRadius: number;
    opened: boolean;
    setMenuOpen: (id: string) => void;
    setOpened: (opened: boolean) => void;
    setColorScheme: (scheme: 'dark' | 'light') => void;
    setFontFamily: (fontFamily: string) => void;
    setBorderRadius: (borderRadius: number) => void;
}

export const useCustomizationStore = create(
    persist<CustomizationState>(
        (set) => ({
            isOpen: [],
            defaultId: 'default',
            scheme: 'light',
            fontFamily: config.fontFamily,
            borderRadius: config.borderRadius,
            opened: true,
            setMenuOpen: (id: string) => set(() => ({isOpen: [id]})),
            setOpened: (opened: boolean) => set(() => ({opened})),
            setColorScheme: (scheme: 'dark' | 'light') => set({scheme}),
            setFontFamily: (fontFamily: string) => set(() => ({fontFamily})),
            setBorderRadius: (borderRadius: number) => set(() => ({borderRadius}))
        }),
        {
            name: 'customization-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
);
