import { useGameStore } from "../store/useGameStore";
import Casilla from "./Casilla";
import { Box, Stack, Button, Chip } from "@mui/material";

export default function Tablero(){
  const board  = useGameStore(s=>s.board);
  const turn   = useGameStore(s=>s.turn);
  const winner = useGameStore(s=>s.winner);
  const play   = useGameStore(s=>s.play);
  const reset  = useGameStore(s=>s.reset);

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
      <Box sx={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2 }}>
      {board.map((cell,i)=>(
        <Casilla key={i} value={cell} onClick={()=>play(i)}/>
      ))}
    </Box>
    </Stack>
  );
}