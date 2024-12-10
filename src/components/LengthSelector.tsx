export interface LengthSelectorProps {
  min: number;
  max: number;
  length: number;
  onChange: (length: number) => void;
}

export function LengthSelector({
  min,
  max,
  length,
  onChange,
}: LengthSelectorProps) {
  return (
    <div className="w-full px-2 flex flex-row flex-nowrap gap-2">
      <p>Length:</p>
      <input
        className="grow"
        type="range"
        value={length}
        step={1}
        min={min}
        max={max}
        onInput={(e) => onChange(parseInt(e.currentTarget.value))}
      />
      <input
        className="w-10"
        type="number"
        value={length}
        step={1}
        min={min}
        max={max}
        onInput={(e) => onChange(parseInt(e.currentTarget.value))}
      />
    </div>
  );
}
