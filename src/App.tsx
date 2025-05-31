import { CssBaseline, Box } from "@mui/material";
import Tablero from "./components/Tablero";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ mt: 4 }}>
        <Tablero />
      </Box>
    </>
  );
}
