import { Tag } from "../Tag/Tag";
import "./FilterBar.css";

export const FilterBar = ({
  selectedFilter,
  filters,
  onChange,
}: {
  selectedFilter: string | undefined;
  filters: string[];
  onChange: (f: string) => void;
}) => {
  return (
    <div className="filterBar">
      <strong>Filters: </strong>
      {filters.map((f) => (
        <Tag
          style={{ cursor: "pointer" }}
          key={f}
          onClick={() => onChange(f)}
          content={f}
          type={selectedFilter === f ? "FILLED" : "OUTLINED"}
        />
      ))}
    </div>
  );
};
