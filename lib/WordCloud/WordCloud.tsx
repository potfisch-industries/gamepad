import { useMemo } from "react";
import { generateWordCloudData } from "./generateWordCloudData";
export const WordCloud = ({
  sourceText,
  minimumMentions,
}: {
  sourceText: string;
  minimumMentions: number;
}) => {
  const wordCloudData = useMemo(() => {
    return generateWordCloudData(sourceText, minimumMentions);
  }, [sourceText, minimumMentions]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: ".5rem",
        alignItems: "center",
      }}
    >
      {wordCloudData?.map((entry) => {
        return (
          <span
            key={entry.word}
            style={{
              fontSize: `${16 + entry.amount * 4}px`,
              color: entry.color,
              padding: `0px ${entry.amount * 4}px`,
            }}
          >
            {entry.word}
          </span>
        );
      })}
    </div>
  );
};
