export const TextInput = ({
  value,
  label,
  onChange,
  placeholder,
  disabled,
  className,
  type,
}: {
  value: string;
  label: string;
  disabled?: boolean;
  placeholder: string;
  onChange: (newValue: string) => void;
  className?: string;
  type?: "password";
}) => {
  return (
    <>
      <strong>{label}</strong>
      <input
        type={type}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={className}
      />
    </>
  );
};
