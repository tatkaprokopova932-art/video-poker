import type { PlayingCard, Suit, CardValue } from "../types/PlayingCard";

const suits: Suit[] = ["hearts", "diamonds", "clubs", "spades"];
const values: CardValue[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

/**
 * Creates a standard deck of 52 playing cards.
 *
 * @returns A new array containing all 52 playing cards.
 */
export function createDeck(): PlayingCard[] {
  const deck: PlayingCard[] = [];

  for (const suit of suits) {
    for (const value of values) {
      deck.push({
        suit: suit,
        value: value,
      });
    }
  }

  return deck;
}
