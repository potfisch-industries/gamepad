import { ThemeProvider } from "./ThemeProvider";

export const StoryBookThemeProvider = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  return (
    <ThemeProvider
      highlightColor="green"
      errorColor="red"
      warningColor="yellow"
    >
      {children}
    </ThemeProvider>
  );
};
