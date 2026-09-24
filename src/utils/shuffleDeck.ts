import type { PlayingCard } from "../types/PlayingCard";

/**
 * Shuffles a deck of playing cards.
 *
 * @param deck - The deck of cards that should be shuffled.
 * @returns A new array containing the cards in shuffled order.
 */
export function shuffleDeck(deck: PlayingCard[]): PlayingCard[] {
  const shuffledDeck = [...deck];

  for (let i = shuffledDeck.length - 1; i>0; i--){
    const randomIndex = Math.floor(Math.random()* (i+1));

    [shuffledDeck[i], shuffledDeck[randomIndex]] = [
      shuffledDeck[randomIndex],
      shuffledDeck[i],
    ]

  }
  return shuffledDeck;
}