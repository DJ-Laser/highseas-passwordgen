import { useState } from "react";
import {
  CharSet,
  genPassword,
  LOWERCASE,
  NUMBERS,
  SYMBOLS,
  UPPERCASE,
} from "../password";
import { CharSelector } from "./CharSelector";
import { PasswordDisplay } from "./PasswordDisplay";

const charSets = [UPPERCASE, LOWERCASE, NUMBERS, SYMBOLS];

const labels = [
  "Uppercase (ABC)",
  "Lowercase (abc)",
  "Numbers (123)",
  "Symbols (!#$)",
];

function regenerate(customChars: string, selected: boolean[], length: number) {
  const chars = charSets;
  const charsSelected = selected;
  // Make letters always have same total priority by concatenating them
  if (selected[0] && selected[1]) {
    chars.push(charSets[0].and(charSets[1]));
    charsSelected.push(true);

    chars.splice(0, 2);
    charsSelected.splice(0, 2);
  }

  chars.push(new CharSet(customChars));
  charsSelected.push(true);
  return genPassword(
    chars.filter((_, i) => charsSelected[i]),
    length,
  );
}

export function PasswordGenerator() {
  const [selected, setSelected] = useState([true, true, true, true]);

  const [customChars, setCustomChars] = useState("");

  const [length, _setLength] = useState(8);
  const [password, setPassword] = useState(() =>
    regenerate(customChars, selected, length),
  );

  return (
    <>
      <PasswordDisplay
        password={password}
        onRegenerate={() =>
          setPassword(regenerate(customChars, selected, length))
        }
      />
      <CharSelector
        groups={labels}
        selected={selected}
        onCustomChanged={(customChars) => setCustomChars(customChars)}
        onSelectionChanged={(index, checked) => {
          const newSelected = [...selected];
          newSelected[index] = checked;
          setSelected(newSelected);
          setPassword(regenerate(customChars, newSelected, length));
        }}
      />
    </>
  );
}
