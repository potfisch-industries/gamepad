import { createContext, useMemo } from "react";

export interface ThemeContext {
  highlightColor: string;
  warningColor: string;
  errorColor: string;
}

export const themeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider = ({
  highlightColor,
  warningColor,
  errorColor,
  children,
}: {
  highlightColor: string;
  warningColor: string;
  errorColor: string;
  children: React.JSX.Element;
}) => {
  const value = useMemo(() => {
    return { highlightColor, warningColor, errorColor };
  }, [highlightColor, warningColor, errorColor]);
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};
