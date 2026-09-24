import { create } from "zustand";
import type { Player } from "../types/Player";
import type { PlayingCard } from "../types/PlayingCard";
import { createDeck } from "../utils/createDeck";
import { shuffleDeck } from "../utils/shuffleDeck";

type GameState = {
  startRound: ()=> void;
  coins: number;
  bet: number;
  players: Player [];
  activePlayer : Player | null;
  deck: PlayingCard[];
  hand: PlayingCard[];
  discardedCards: PlayingCard[];


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