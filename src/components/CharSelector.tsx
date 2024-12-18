import { CharsOption } from "./CharsOption";

export interface CharSelectorProps {
  onSelectionChanged: (index: number, state: boolean) => void;
  onCustomChanged: (customChars: string) => void;
  selected: boolean[];
  groups: string[];
  custom: string;
}

export function CharSelector({
  onSelectionChanged,
  onCustomChanged,
  selected,
  groups,
  custom,
}: CharSelectorProps) {
  return (
    <div className="grid grid-cols-2 grid-rows-[min-content,_1fr] gap-x-6">
      <div className="row-start-2">
        {groups.map((label, i) => (
          <CharsOption
            key={i}
            text={label}
            checked={selected[i]}
            onChange={(checked) => onSelectionChanged(i, checked)}
          />
        ))}
      </div>
      <h3 className="my-3 col-span-2 font-bold text-parchment-ink-dark text-3xl">
        Characters
      </h3>
      <div className="">
        <textarea
          className="w-full h-full col-start-2 resize-none"
          placeholder="Enter custom characters..."
          value={custom}
          onInput={(e) => onCustomChanged(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}
