import { create } from "zustand";
import type { Player } from "../types/Player";
import type { PlayingCard } from "../types/PlayingCard";
import { createDeck } from "../utils/createDeck";
import { shuffleDeck } from "../utils/shuffleDeck";
import type { PokerHand } from "../types/PokerHand";
import { evaluateHand } from "../utils/evaluateHand";

type GameState = {
  startRound: ()=> void;
  toggleHold: (index: number)=> void;
  drawCards: ()=> void;


  coins: number;
  bet: number;
  players: Player [];
  activePlayer : Player | null;
  deck: PlayingCard[];
  hand: PlayingCard[];
  discardedCards: PlayingCard[];
  heldCardIndexes: number[];
  hasDrawn: boolean;
  currentPokerHand: PokerHand | null;



  createPlayer: (name: string) => void;
  selectPlayer: (name: string)=> void;
};

const useGameStore = create<GameState>((set) => ({
  coins: 100,
  bet: 5,
  players: [],
  activePlayer: null,
  deck: [],
  hand: [],
  discardedCards: [],
  heldCardIndexes: [],
  hasDrawn: false,
  currentPokerHand: null,


  /**
 * Starts a new round by creating and shuffling a full deck.
 *
 * @returns Nothing.
 */
startRound: () =>{
  const newDeck = shuffleDeck(createDeck());
  const newHand = newDeck.slice(0,5);
  const remainingDeck = newDeck.slice(5);

  set({
    deck: remainingDeck,
    hand: newHand,
    discardedCards: [],
    heldCardIndexes: [],
    hasDrawn: false,
    currentPokerHand: null,
  });

},

toggleHold: (index) =>{
  set((state)=> ({
    heldCardIndexes: state.heldCardIndexes.includes(index)
    ? state.heldCardIndexes.filter((heldIndex)=> heldIndex !==index)
    : [...state.heldCardIndexes, index],
  }));
},


/**
 * Replaces cards that are not held with new cards from the deck.
 *
 * @returns Nothing.
 */
drawCards: () => {
  set ((state) => {
    let deckIndex = 0;

    const newDiscardedCards = [...state.discardedCards];
    const newHand= state.hand.map ((card, index)=> {
      if (state.heldCardIndexes.includes(index)){
        return card;
      }

      newDiscardedCards.push(card);

      const newCard = state.deck[deckIndex];
      deckIndex++;
      return newCard;
    });

    const remainingDeck = state.deck.slice(deckIndex);

    const pokerHand = evaluateHand(newHand);

    return {
      hand: newHand,
      deck: remainingDeck,
      DiscardedCards: newDiscardedCards,
      heldCardIndexes: [],
      hasDrawn: true,
      currentPokerHand: pokerHand,
    };

  });
},

  createPlayer: (name) =>{
    const newPlayer: Player = {
      name: name,
      coins: 100,
    };

  set((state)=> ({
    players: [...state.players, newPlayer],
  }));
  },
  selectPlayer: (name) => {
      set ((state) => ({
        activePlayer: state.players.find((player) => player.name === name) || null,
      }));
    },
}));


export default useGameStore;