import { StateCreator, create } from 'zustand';

export interface ThemeState {
  background1: string;
  background2: string;
  glassColor: string;
  opacity: string;
  color: string;
  computed: Record<string, string>;
}

const themeApi: StateCreator<ThemeState> = (set, get) => ({
  background1: '#00c8ff',
  background2: '#b300ff',
  glassColor: '#000000',
  opacity: '40',
  color: '#ffffff',

  computed: {
    get background() {
      const background1 = get().background1;
      const background2 = get().background2;
      return `linear-gradient(220deg, ${background1} 10%, ${background2} 90%) fixed`;
    },

    get glass() {
      const glassColor = get().glassColor;
      const opacity = get().opacity;

      return `rgba(${parseInt(glassColor.slice(-6, -4), 16)}, ${parseInt(
        glassColor.slice(-4, -2),
        16
      )}, ${parseInt(glassColor.slice(-2), 16)}, ${opacity}%)`;
    },
  },
});

export const useThemeStore = create<ThemeState>()(themeApi);
