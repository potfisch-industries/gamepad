import { useContext } from "react";
import { themeContext } from "../ThemeProvider/ThemeProvider";
import "./Bubble.css";

export const Bubble = ({ children }: { children: React.JSX.Element }) => {
  const { highlightColor } = useContext(themeContext);
  return (
    <div style={{ backgroundColor: highlightColor }} className="bubble">
      {children}
    </div>
  );
};
