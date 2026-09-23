import { create } from "zustand";
import type { Player } from "../types/Player";

type GameState = {
  coins: number;
  bet: number;
  players: Player [];
  activePlayer : Player | null;
  createPlayer: (name: string) => void;
  selectPlayer: (name: string)=> void;
};

const useGameStore = create<GameState>((set) => ({
  coins: 100,
  bet: 5,
  players: [],
  activePlayer: null,

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