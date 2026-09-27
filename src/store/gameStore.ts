import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Player } from "../types/Player";
import type { PlayingCard } from "../types/PlayingCard";
import { createDeck } from "../utils/createDeck";
import { shuffleDeck } from "../utils/shuffleDeck";
import type { PokerHand } from "../types/PokerHand";
import { evaluateHand } from "../utils/evaluateHand";
import { getPayoutMultiplier } from "../data/payouts";

type GameState = {
  startRound: ()=> void;
  toggleHold: (index: number)=> void;
  drawCards: ()=> void;


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

const useGameStore = create<GameState>()(
  persist(
    (set) => ({
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


  /**
 * Starts a new round by creating and shuffling a deck,
 * dealing five cards, and subtracting the current bet.
 *
 * @returns Nothing.
 */
startRound: () =>{
  const state = useGameStore.getState();

if (!state.activePlayer || state.activePlayer.coins < state.bet) {
  return;
}
  const newDeck = shuffleDeck(createDeck());
  const newHand = newDeck.slice(0,5);
  const remainingDeck = newDeck.slice(5);
  const updatedPlayer = {
  ...state.activePlayer,
  coins: state.activePlayer.coins - state.bet,
};

  set({
    deck: remainingDeck,
    hand: newHand,
    discardedCards: [],
    heldCardIndexes: [],
    hasDrawn: false,
    currentPokerHand: null,
    activePlayer: updatedPlayer,
    players: state.players.map((player) =>
      player.name === updatedPlayer.name ? updatedPlayer : player,
    ),
  });

},


/**
 * Holds or releases a card selected by the player.
 *
 * @param index - The position of the card in the current hand.
 * @returns Nothing.
 */
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

    const winnings = getPayoutMultiplier(pokerHand) * state.bet;

const updatedPlayer = state.activePlayer
  ? {
      ...state.activePlayer,
      coins: state.activePlayer.coins + winnings,
    }
  : null;

    return {
      hand: newHand,
      deck: remainingDeck,
      DiscardedCards: newDiscardedCards,
      heldCardIndexes: [],
      hasDrawn: true,
      currentPokerHand: pokerHand,
      activePlayer: updatedPlayer,
players: updatedPlayer
  ? state.players.map((player) =>
      player.name === updatedPlayer.name ? updatedPlayer : player,
    )
  : state.players,
    };

  });
},


/**
 * Creates a new player with 100 starting coins.
 *
 * @param name - The name of the new player.
 * @returns Nothing.
 */
  createPlayer: (name) =>{
    const newPlayer: Player = {
      name: name,
      coins: 100,
    };

  set((state)=> ({
    players: [...state.players, newPlayer],
  }));
  },


  /**
 * Creates a new player with 100 starting coins.
 *
 * @param name - The name of the new player.
 * @returns Nothing.
 */
  selectPlayer: (name) => {
      set ((state) => ({
        activePlayer: state.players.find((player) => player.name === name) || null,
      }));
    },
    }),
    {
      name: "video-poker-game",
    },
  ),
);


export default useGameStore;