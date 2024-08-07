import { ReactNode } from "react";
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
  return (
    <div
      role="button"
      style={style}
      className={type === "FILLED" ? "filledTag" : "outlinedTag"}
      onClick={onClick}
    >
      {content}
    </div>
  );
};
