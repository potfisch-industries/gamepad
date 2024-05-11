import { ReactNode } from "react";

export const Headline = ({
  content,
  backbutton,
}: {
  content: ReactNode;
  backbutton?: { content: ReactNode; onClick: () => void };
}) => {
  return (
    <div
      className="headline"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem",
      }}
    >
      {backbutton && (
        <button onClick={backbutton.onClick}>{backbutton.content}</button>
      )}
      <h1>{content}</h1>
    </div>
  );
};
