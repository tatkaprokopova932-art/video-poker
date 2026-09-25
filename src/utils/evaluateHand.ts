import type { PlayingCard } from "../types/PlayingCard";
import type { PokerHand } from "../types/PokerHand";

const cardValues = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14,
};

/**
 * Evaluates a poker hand and returns its poker hand type.
 *
 * @param hand - The five playing cards to evaluate.
 * @returns The poker hand type.
 */
export function evaluateHand (hand: PlayingCard []): PokerHand{
  const values = hand.map((card)=>cardValues[card.value]);
  values.sort((a,b) => a-b);
  const isFlush = hand.every((card)=>card.suit === hand[0].suit);
  const isStraight = values.every ((value, index)=> {
    if(index===0){
      return true;
    }
    return value === values [index-1] + 1;
  });
  const isLowAceStraight =
  values[0]=== 2 &&
  values[1]=== 3 &&
  values[2]=== 4 &&
  values[3]=== 5 &&
  values[4]=== 14;

  const hasStraight = isStraight || isLowAceStraight;

  const valueCounts: Record<number, number> = {};
  values.forEach ((value) =>{
    valueCounts[value] = (valueCounts[value] || 0) +1;
  });

  const counts = Object.values(valueCounts);
  
  if(isFlush && hasStraight&&values[0]===10){
    return "royal-flush";
  }

  if (isFlush&&hasStraight){
    return "straight-flush";
  }

  if (counts.includes(4)) {
    return "four-of-a-kind";
  }

  if (counts.includes(3) && counts.includes(2)) {
    return "full-house";
  }

  if (isFlush) {
    return "flush";
  }

  if (hasStraight){
    return "straight";
  }

  if (counts.includes(3)){
    return "three-of-a-kind"
  }

  if (counts.filter((count) => count === 2).length === 2) {
  return "two-pair";
}
  
  const highPair = Object.entries(valueCounts).some(
  ([value, count]) => count === 2 && Number(value) >= 11,
);

if (highPair) {
  return "jacks-or-better";
}



  return "no-win";
}
