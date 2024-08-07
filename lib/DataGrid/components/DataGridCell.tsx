import { Tag } from "../../Tag/Tag";
import { DataPoint } from "../DataGrid";

export const DataGridCell = ({
  dataPoint,
  selected,
  inSelectedColumn,
  inSelectedRow,
}: {
  dataPoint: DataPoint | undefined;
  selected?: boolean;
  inSelectedRow?: boolean;
  inSelectedColumn?: boolean;
}) => {
  return (
    <div
      onClick={dataPoint?.onClick}
      className={`datagridcell ${selected ? "selected" : undefined} ${inSelectedRow ? "inSelectedRow" : undefined} ${inSelectedColumn ? "inSelectedColumn" : undefined}`}
    >
      {dataPoint?.content}{" "}
      {dataPoint?.filters && dataPoint.filters.length > 0
        ? dataPoint.filters.map((f) => <Tag content={f} type={"FILLED"} />)
        : undefined}
    </div>
  );
};
