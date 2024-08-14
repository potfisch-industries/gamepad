import React, { ReactNode, useState } from "react";
import { FilterBar } from "../FilterBar/FilterBar";
import "./DataGrid.css";
import { useAssembledRows } from "./hooks/useAssembledRows";

export interface DataPoint {
  content: ReactNode;
  filters?: string[];
  onClick?: () => void;
}

export const DataGrid = ({
  rowLabels,
  columnLabels,
  rows,
  filters,
}: {
  rowLabels: DataPoint[];
  columnLabels: DataPoint[];
  rows: (DataPoint | undefined)[][];
  filters: string[];
}): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState<string | undefined>();
  const assembledRows = useAssembledRows({
    columnLabels,
    rows,
    rowLabels,
    selectedFilter,
  });

  const toggleFilter = (newFilter: string) => {
    if (newFilter === selectedFilter) {
      setSelectedFilter(undefined);
    } else setSelectedFilter(newFilter);
  };

  return (
    <>
      {filters && (
        <FilterBar
          filters={filters}
          onChange={toggleFilter}
          selectedFilter={selectedFilter}
        />
      )}
      <div
        className="datagrid"
        style={{
          gridTemplateColumns: assembledRows[0].map(() => "1fr").join(" "),
        }}
      >
        {assembledRows.map((r, rowIndex) =>
          r.map((d, columnIndex) => (
            <React.Fragment key={"d" + rowIndex + "/" + columnIndex}>
              {d}
            </React.Fragment>
          ))
        )}
      </div>
    </>
  );
};
