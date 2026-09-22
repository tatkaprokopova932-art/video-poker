import { create } from "zustand";

type GameState = {
  coins: number;
  bet: number;
};

const useGameStore = create<GameState>(() => ({
  coins: 100,
  bet: 5,
}));

export default useGameStore;