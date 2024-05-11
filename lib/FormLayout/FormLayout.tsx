import { ReactNode } from "react";

export const FormLayout = ({ children }: { children: ReactNode[] }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
