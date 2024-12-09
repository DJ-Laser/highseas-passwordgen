import { useMemo, useState } from "react";
import { CharSet, LOWERCASE, NUMBERS, SYMBOLS, UPPERCASE } from "../password";
import { CharsOption } from "./CharsOption";

export interface CharSelectorProps {
  onCharsChanged: (chars: CharSet) => void;
}

export function CharSelector({ onCharsChanged }: CharSelectorProps) {
  const charSets = [UPPERCASE, LOWERCASE, NUMBERS, SYMBOLS];
  const labels = [
    "Uppercase (ABC)",
    "Lowercase (abc)",
    "Numbers (123)",
    "Symbols (!#$)",
  ];
  const [selected, setSelected] = useState([true, true, true, true]);
  const [customChars] = useState("");
  const customCharSet = useMemo(() => new CharSet(customChars), [customChars]);

  const setChecked = (checked: boolean, index: number) => {
    const newSelected = [...selected];
    newSelected[index] = checked;
    setSelected(newSelected);
    let chars = customCharSet;
    for (let i = 0; i < charSets.length; i++) {
      if (newSelected[i]) {
        chars = chars.and(charSets[i]);
      }
    }

    onCharsChanged(chars);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-[min-content,_1fr] gap-x-6">
      <div className="row-start-2">
        {labels.map((text, i) => (
          <CharsOption
            key={i}
            text={text}
            checked={selected[i]}
            onChange={(checked) => setChecked(checked, i)}
          />
        ))}
      </div>
      <h3 className="my-3 col-span-2 font-bold text-3xl">Characters</h3>
      <div className="">
        <textarea
          className="w-full h-full col-start-2 resize-none"
          placeholder="Enter custom characters..."
        />
      </div>
    </div>
  );
}
