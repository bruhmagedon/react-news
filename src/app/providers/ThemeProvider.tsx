import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';

interface ThemeContext {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContext>({});

// Контекст
export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
    localStorage.setItem('DARK_THEME', newTheme);
  };

  return { theme, toggleTheme };
};

interface ThemeProviderProps {
  children: ReactNode;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const defaultTheme = (localStorage.getItem('DARK_THEME') as Theme) || Theme.LIGHT;
// Провайдер
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

// const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT; // получили тему из ls, преобразовали к типу Theme, если ls пустой - присвоить дефолтный тип

// interface ThemeProviderProps {
//   initialTheme?: Theme;
// }

// // Возвращает из контекста провайдер (доступ к контексту в любой точке)
// const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
//   // FC чтобы получить children
//   const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

//   // value=объект, поэтому его нужно мемоизировать, чтобы он не инициализировался заново при каждом рендере компонента
//   const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

//   return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
// };

// // доступные темы

// // Интерфейс для контекста
// export interface ThemeContextProps {
//   theme?: Theme; // тема
//   setTheme?: (theme: Theme) => void; // изменить тему
// }

// // Контекст для тем
// export const ThemeContext = createContext<ThemeContextProps>({});

// // Ключ для LS (состояние темы сайта)
// export const LOCAL_STORAGE_THEME_KEY = 'theme';

// import { useContext } from 'react';
// import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

// // Что должен возвращать хук
// interface UseThemeResult {
//   toggleTheme: () => void;
//   theme: Theme;
// }

// // Хук - выбор темы
// export function useTheme(): UseThemeResult {
//   const { theme, setTheme } = useContext(ThemeContext); // достали тему из контекста (LS)

//   // Переключить тему
//   const toggleTheme = () => {
//     const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
//     setTheme(newTheme);
//     document.body.className = newTheme;
//     localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
//   };

//   return { theme, toggleTheme };
// }
