import { Locales } from '@/types/Localization';
import { createCustomStore } from '@/utils/createStore';

type SystemStates = {
  language: Locales;
  currentHash: string;
  scrollJumping: boolean;
};

type SystemAction = {
  setLanguage: (lang: Locales) => void;
  setCurrentHash: (block: string) => void;
  setScrollJumping: (jumping: boolean) => void;
};

const isClientRussian = window.navigator.language.includes('ru');

export const useSystemStore = createCustomStore({
  name: 'system',
})<SystemStates & SystemAction>((set) => ({
  language: isClientRussian ? 'ru' : 'en',
  currentHash: location.hash.replace('#', ''),
  scrollJumping: false,
  setLanguage: (lang) => set({ language: lang }),
  setCurrentHash: (block) => set({ currentHash: block }),
  setScrollJumping: (jumping) => set({ scrollJumping: jumping }),
}));
