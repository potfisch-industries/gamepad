export const TextAreaInput = ({
  value,
  onChange,
  label,
  cols,
  rows,
}: {
  value: string;
  label: string;
  rows: number;
  cols: number;
  disabled?: boolean;
  onChange: (newValue: string) => void;
  className?: string;
}) => {
  return (
    <>
      <strong>{label}</strong>
      <textarea
        className="input textArea"
        value={value}
        cols={cols}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};
