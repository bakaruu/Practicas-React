import { createContext, useContext, useState } from "react";
import type { PropsWithChildren } from "react";

type Cell = "X" | "O" | null;
interface Ctx {
  board: Cell[];
  turn: "X" | "O";
  winner: Cell;
  play: (i: number) => void;
  reset: () => void;
}

const GameCtx = createContext<Ctx | null>(null);
export const useGame = () => useContext(GameCtx)!;

const lines = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6],
];

export function GameProvider({ children }: PropsWithChildren) {
  const [board, setBoard]   = useState<Cell[]>(Array(9).fill(null));
  const [turn, setTurn]     = useState<"O" | "X">("O");
  const [winner, setWinner] = useState<Cell>(null);

  const play = (i: number) => {
    if (board[i] || winner) return;
    const next = [...board];
    next[i] = turn;
    setBoard(next);
    const win = lines.some(l => l.every(idx => next[idx] === turn));
    setWinner(win ? turn : null);
    setTurn(prev => (prev === "O" ? "X" : "O"));
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setTurn("O");
    setWinner(null);
  };

  return (
    <GameCtx.Provider value={{ board, turn, winner, play, reset }}>
      {children}
    </GameCtx.Provider>
  );
}
