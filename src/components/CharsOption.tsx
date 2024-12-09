export interface CharsOptionProps {
  checked: boolean;
  disabled?: boolean;
  text: string;
  onChange: (checked: boolean) => void;
}

export function CharsOption({
  checked,
  disabled = false,
  text,
  onChange,
}: CharsOptionProps) {
  return (
    <div className="m-1 flex flex-row flex-nowrap">
      <input
        className="mr-2"
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <p>{text}</p>
    </div>
  );
}
