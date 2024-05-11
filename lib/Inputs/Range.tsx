export const RangeInput = ({
  value,
  min,
  max,
  onChange,
  className,
  disabled,
  label,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (x: number) => void;
  disabled?: boolean;
  label: string;
  className?: string;
}) => {
  return (
    <>
      <strong>{label}</strong>
      <input
        disabled={disabled}
        className={`${className} rangeInput`}
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.valueAsNumber)}
      />
    </>
  );
};
