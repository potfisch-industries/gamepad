import { ReactNode, useContext } from "react";
import { themeContext } from "../ThemeProvider/ThemeProvider";
import "./Tag.css";

export const Tag = ({
  content,
  onClick,
  type,
  style,
}: {
  content: ReactNode;
  onClick?: () => void;
  type: "OUTLINED" | "FILLED";
  style?: React.CSSProperties;
}) => {
  const { highlightColor } = useContext(themeContext);

  return (
    <div
      role="button"
      style={{
        ...style,
        borderColor: type == "OUTLINED" ? highlightColor : "inherit",
        backgroundColor: type == "FILLED" ? highlightColor : "inherit",
      }}
      className={type === "FILLED" ? "filledTag" : "outlinedTag"}
      onClick={onClick}
    >
      {content}
    </div>
  );
};
