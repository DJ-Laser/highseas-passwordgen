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

const charSets = [
  UPPERCASE.withProbability(0.5),
  LOWERCASE.withProbability(0.5),
  NUMBERS,
  SYMBOLS,
];

function regenerate(customChars: string, selected: boolean[], length: number) {
  const chars = charSets.filter((_, i) => selected[i]);
  chars.push(new CharSet(customChars));
  return genPassword(chars, length);
}

export function PasswordGenerator() {
  const [selected, setSelected] = useState([true, true, true, true]);
  const labels = [
    "Uppercase (ABC)",
    "Lowercase (abc)",
    "Numbers (123)",
    "Symbols (!#$)",
  ];

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
          setPassword(regenerate(customChars, selected, length));
        }}
      />
    </>
  );
}
