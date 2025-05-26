import { CssBaseline, Container, Grid } from "@mui/material";
import AppHeader from "./components/AppHeader";
import BalanceCard from "./components/BalanceCard";
import TransactionsList from "./components/TransactionsList";

import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <AppHeader />

      <Container sx={{ py: 4 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center" // centra las columnas
          alignItems="stretch" // fuerza misma altura
          
        >
          <Grid item xs={12} sm={6} md={4}>
            <BalanceCard />
          </Grid>
          
          <Grid item xs={12} sm={6} md={8}>
            <TransactionsList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
