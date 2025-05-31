import { CssBaseline } from "@mui/material";
import { GameProvider } from "./context/GameContext";
import Tablero from "./components/Tablero";

export default function App() {
  return (
    <GameProvider>
      <CssBaseline />
      <Tablero />
    </GameProvider>
  );
}
