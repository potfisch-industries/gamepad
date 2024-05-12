import {
  CSSProperties,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { getOrganizerHeadline } from "./functions/getOrganizerHeadline";

export interface OrganizerOption {
  id: string;
  content: ReactNode;
}
export interface OrganizerProps {
  nameOfOptions: string;
  options: OrganizerOption[];
  initialSelected: string[];
  selectionMax?: number;
  selectionMin?: number;
  onConfirm: (selected: string[]) => void;
  onCancel?: () => void;
  gridStyle?: CSSProperties;
}

export const Organizer = ({
  options,
  nameOfOptions,
  initialSelected,
  selectionMax,
  selectionMin,
  onConfirm,
  onCancel,
  gridStyle,
}: OrganizerProps) => {
  const [selected, setSelected] = useState<string[]>(initialSelected);

  const invalidSelection = useMemo(() => {
    if (selectionMax && selected.length > selectionMax) {
      return true;
    }
    if (selectionMin && selected.length < selectionMin) {
      return true;
    }
    return false;
  }, [selected, selectionMax, selectionMin]);

  const handleConfirm = useCallback(() => {
    if (invalidSelection) {
      return;
    }
    onConfirm(selected);
  }, [selected, onConfirm]);

  const onClick = useCallback(
    (id: string) => {
      if (
        !selected.includes(id) &&
        (!selectionMax || selected.length < selectionMax)
      ) {
        setSelected([...selected, id]);
        return;
      }
      setSelected(selected.filter((s) => s !== id));
    },
    [selected]
  );

  if (options.length === 0) {
    return (
      <div>
        <h1>No valid options</h1>
        <button onClick={onCancel}>Cancel Selection</button>
      </div>
    );
  }

  return (
    <div>
      <h1>
        {getOrganizerHeadline({ selectionMax, selectionMin, nameOfOptions })}
      </h1>
      <h2>Selected:</h2>
      <div style={gridStyle ?? { display: "flex", gap: ".5rem" }}>
        {options
          .filter((o) => selected.includes(o.id))
          .map((o) => (
            <div onClick={() => onClick(o.id)}>{o.content}</div>
          ))}
      </div>{" "}
      <h2>All:</h2>
      <div style={gridStyle ?? { display: "flex", gap: ".5rem" }}>
        {options
          .filter((o) => !selected.includes(o.id))
          .map((o) => (
            <div onClick={() => onClick(o.id)}>{o.content}</div>
          ))}
      </div>
      {onCancel && <button onClick={onCancel}>Cancel Selection</button>}
      <button onClick={handleConfirm} disabled={invalidSelection}>
        Confirm Selection
      </button>
    </div>
  );
};
