import { ReactNode } from "react";

export const LineWithIcon = ({
  icon,
  text,
}: {
  icon: ReactNode;
  text: ReactNode;
}) => {
  return (
    <p style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
      {icon}
      {text}
    </p>
  );
};
