import { randomUUID } from "crypto";
import { Tag } from "../../main";
import { DataPoint } from "../DataGrid";

export const RowOrColumnLabel = ({
  dataPoint,
  className,
}: {
  dataPoint: DataPoint;
  className?: string;
}) => {
  return (
    <div onClick={dataPoint.onClick} className={className}>
      {dataPoint.content}
      {(dataPoint.filters ?? []).map((f) => (
        <Tag key={randomUUID()} content={f} type="FILLED" />
      ))}
    </div>
  );
};
