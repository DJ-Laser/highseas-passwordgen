export class CharSet {
  private chars: Set<string>;
  private _probability: number;

  constructor(chars: string, probability = 1) {
    this._probability = probability;
    this.chars = new Set();
    for (const c of chars) {
      this.chars.add(c);
    }
  }

  get probability() {
    return this._probability;
  }

  withProbability(probability = this.probability) {
    const newSet = new CharSet("", probability);
    for (const c of this.chars) {
      newSet.chars.add(c);
    }

    return newSet;
  }

  getChar(): string {
    const idx = Math.floor(Math.random() * this.chars.size);
    let i = 0;
    for (const c of this.chars) {
      if (i == idx) {
        return c;
      }
      i++;
    }

    throw "Can't get a char from this set";
  }

  isEmpty(): boolean {
    return this.chars.size == 0;
  }
}

export const UPPERCASE = new CharSet("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
export const LOWERCASE = new CharSet("abcdefghijklmnopqrstuvwxyz");
export const NUMBERS = new CharSet("1234567890");
export const SYMBOLS = new CharSet("!@#$%^&*");

// Gets a charset from a list based on the probabilities
export function getCharSet(charSets: CharSet[]): CharSet {
  if (charSets.length === 0) {
    throw "Bruh you need at least one set";
  }

  const totalProbability = charSets.reduce((p, set) => p + set.probability, 0);
  const randValue = Math.random() * totalProbability;
  let probability = 0;

  // Each iteration, the randValue wasn't less than the total, so the probability is p + set.probability
  for (const set of charSets) {
    probability += set.probability;
    if (randValue < probability) {
      return set;
    }
  }

  // Return the last set is we didnt get any match
  // Could happen dut to floating point if randvalue is very close to total
  return charSets[charSets.length - 1];
}

export function genPassword(charSets: CharSet[], length: number): string {
  const charsAvailable = charSets.filter((set) => !set.isEmpty());
  if (charsAvailable.length == 0) return "";

  let password = "";

  for (let i = 0; i < length; i++) {
    const set = getCharSet(charsAvailable);
    password += set.getChar();
  }

  return password;
}
