import { useState } from "react";
import { Box, Stack, Button, Chip } from "@mui/material";
import Casilla from "./Casilla";

type Cell = "X" | "O" | null;
const initialBoard: Cell[] = Array(9).fill(null);

export default function Tablero() {
  const [board, setBoard] = useState<Cell[]>(initialBoard);
  const [turn, setTurn] = useState<"X" | "O">("O");            // jugador 1 = O
  const [winner, setWinner] = useState<Cell>(null);

  /* ---------- helpers ---------- */
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],      // filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8],      // columnas
    [0, 4, 8], [2, 4, 6],                 // diagonales
  ];

  const checkWinner = (next: Cell[]) => {
    for (const [a, b, c] of lines)
      if (next[a] && next[a] === next[b] && next[a] === next[c]) return next[a];
    return null;
  };

  /* ---------- handlers ---------- */
  const handleClick = (idx: number) => {
    if (board[idx] || winner) return;

    const next = board.slice();
    next[idx] = turn;
    setBoard(next);

    const win = checkWinner(next);
    setWinner(win);
    setTurn((prev) => (prev === "O" ? "X" : "O"));
  };

  const reset = () => {
    setBoard(initialBoard);
    setWinner(null);
    setTurn("O");
  };

  /* ---------- UI ---------- */
  return (
    <Stack
      spacing={2}
      p={2}
      border={1}
      borderColor="plum"
      maxWidth={370}
      mx="auto"
    >
      <Stack direction="row" spacing={1} justifyContent="center">
        <Chip
          label={winner ? `PLAYER ${winner === "O" ? 1 : 2} WINS` : `NEXT: PLAYER ${turn === "O" ? 1 : 2}`}
          color="warning"
          variant="outlined"
        />
        {winner && (
          <Chip
            label={`PLAYER ${winner === "O" ? 1 : 2} WINS`}
            color="warning"
            variant="outlined"
          />
        )}
        <Button variant="contained" color="success" onClick={reset}>
          NEW GAME
        </Button>
      </Stack>

      {/* tablero 3×3 */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
        }}
      >
        {board.map((cell, i) => (
          <Casilla key={i} value={cell} onClick={() => handleClick(i)} />
        ))}
      </Box>
    </Stack>
  );
}
