export const NumberInput = ({
  value,
  label,
  onChange,
  disabled,
  className,
}: {
  value: number;
  label: string;
  disabled?: boolean;
  className?: string;
  onChange: (newValue: number) => void;
}) => {
  return (
    <>
      <strong>{label}</strong>
      <input
        className={className}
        type="number"
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.valueAsNumber)}
      />
    </>
  );
};
