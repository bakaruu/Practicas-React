import { Container, Grid, Typography } from "@mui/material";
import MiCard from "./miCard";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import muiLogo from "../assets/logo.png";


const cards = [
  {
    id: 1,
    title: "Material UI",
    img: muiLogo,
    text: "La librería de componentes más popular para React.",
  },
  {
    id: 2,
    title: "React 18",
    img: reactLogo,
    text: "La base de todas nuestras prácticas.",
  },
  {
    id: 3,
    title: "Vite + TS",
    img: viteLogo,
    text: "Bundler ultrarrápido con soporte TypeScript listo.",
  },
];

export default function MiContent() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Funcionalidades principales
      </Typography>

      {/* Usa Grid v2 (MUI 7) */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {cards.map((c) => (
          <Grid key={c.id} xs={12} sm={6} md={4} sx={{ display: "flex" }}>
            <MiCard {...c} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
