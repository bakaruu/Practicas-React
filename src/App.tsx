import BalanceCard from "./components/BalanceCard";
import { CssBaseline, Container } from "@mui/material";

import "./App.css";

function App() {
  return (
    <>
      <CssBaseline /> {/* normaliza estilos MUI */}
      <Container sx={{ py: 4 }}>
        <BalanceCard />
      </Container>
    </>
  );
}

export default App;
