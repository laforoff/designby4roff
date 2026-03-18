import { CursorOptions } from '@/types/CursorOptions';
import { createCustomStore } from '@/utils/createStore';

type CursorStates = {
  options: CursorOptions;
};

type CursorAction = {
  setOptions: (options: Partial<CursorOptions>) => void;
};

const DEFAULT_CURSOR_OPTIONS: CursorOptions = { expanded: false, invert: false, hide: false, scale: 1 };

export const useCursorStore = createCustomStore({
  name: 'cursor',
  persistEnable: false,
})<CursorStates & CursorAction>((set) => ({
  options: DEFAULT_CURSOR_OPTIONS,
  setOptions: (options) => set((state) => ({ options: { ...state.options, ...options } })),
}));
