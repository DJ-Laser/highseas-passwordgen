export class CharSet {
  private chars: Set<string>;

  constructor(chars: string) {
    this.chars = new Set();
    for (const c of chars) {
      this.chars.add(c);
    }
  }

  private addChars(chars: Set<string>) {
    for (const c of chars) {
      this.chars.add(c);
    }
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

  and(other: CharSet): CharSet {
    const union = new CharSet("");
    union.addChars(this.chars);
    union.addChars(other.chars);

    return union;
  }
}

export const UPPERCASE = new CharSet("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
export const LOWERCASE = new CharSet("abcdefghijklmnopqrstuvwxyz");
export const NUMBERS = new CharSet("1234567890");
export const SYMBOLS = new CharSet("!@#$%^&*");

export function genPassword(charsAvailable: CharSet, length: number): string {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charsAvailable.getChar();
  }

  return password;
}
