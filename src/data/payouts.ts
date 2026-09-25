import type { PokerHand } from "../types/PokerHand";

export const payouts: {
  hand: PokerHand;
  label: string;
  multiplier: number;
}[] = [
  { hand: "royal-flush", label: "Royal Flush", multiplier: 250 },
  { hand: "straight-flush", label: "Straight Flush", multiplier: 50 },
  { hand: "four-of-a-kind", label: "Four of a Kind", multiplier: 25 },
  { hand: "full-house", label: "Full House", multiplier: 9 },
  { hand: "flush", label: "Flush", multiplier: 6 },
  { hand: "straight", label: "Straight", multiplier: 4 },
  { hand: "three-of-a-kind", label: "Three of a Kind", multiplier: 3 },
  { hand: "two-pair", label: "Two Pair", multiplier: 2 },
  { hand: "jacks-or-better", label: "Jacks or Better", multiplier: 1 },
  { hand: "no-win", label: "No Win", multiplier: 0 },
];

/**
 * Returns the payout multiplier for a poker hand.
 *
 * @param hand - The poker hand to find the payout for.
 * @returns The payout multiplier for the hand.
 */
export function getPayoutMultiplier(hand: PokerHand): number {
  return payouts.find((payout) => payout.hand === hand)?.multiplier ?? 0;
}