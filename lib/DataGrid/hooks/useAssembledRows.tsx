import { ReactNode, useMemo } from "react";
import { Tag } from "../../Tag/Tag";
import { DataPoint } from "../DataGrid";
import { DataGridCell } from "../components/DataGridCell";

export const useAssembledRows = ({
  rowLabels,
  columnLabels,
  rows,
  filters,
  selectedFilter,
}: {
  rowLabels: DataPoint[];
  columnLabels: DataPoint[];
  rows: (DataPoint | undefined)[][];
  filters: string[];
  selectedFilter?: string;
}) => {
  return useMemo<ReactNode[][]>(() => {
    const res: ReactNode[][] = [];

    res.push([
      <div id="placeHolder0/0" />,
      ...columnLabels.map((c, i) => (
        <RowOrColumnLabel
          key={"c" + i}
          dataPoint={c}
          className={`columnLabel ${selectedFilter && c.filters?.includes(selectedFilter) ? "selected" : undefined}`}
        />
      )),
    ]);

    rowLabels.forEach((r, rowIndex) => {
      res.push([
        <RowOrColumnLabel
          key={"r" + rowIndex}
          dataPoint={r}
          className={`rowLabel ${selectedFilter && r.filters?.includes(selectedFilter) ? "selected" : undefined}`}
        />,
        ...columnLabels.map((_, columnIndex) => {
          const dataPoint = rows?.at(rowIndex)?.at(columnIndex);

          const inSelectedRow = !!(
            selectedFilter &&
            rowLabels.at(rowIndex)?.filters?.includes(selectedFilter)
          );
          const inSelectedColumn = !!(
            selectedFilter &&
            columnLabels?.at(columnIndex)?.filters?.includes(selectedFilter)
          );

          return (
            <DataGridCell
              key={"d" + rowIndex + "/" + columnIndex}
              inSelectedColumn={inSelectedColumn}
              inSelectedRow={inSelectedRow}
              selected={
                !!(
                  selectedFilter &&
                  !inSelectedColumn &&
                  !inSelectedRow &&
                  dataPoint?.filters?.includes(selectedFilter)
                )
              }
              dataPoint={dataPoint}
            />
          );
        }),
      ]);
    });

    return res;
  }, [rowLabels, columnLabels, rows, filters, selectedFilter]);
};

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
        <Tag content={f} type="FILLED" />
      ))}
    </div>
  );
};
