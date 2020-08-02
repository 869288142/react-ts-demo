export const UP = "up";

export function up(char: string, index: number ) {
  return { type: UP, char, index };
}