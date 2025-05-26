import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function MiBar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Práctica 4
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Features</Button>
        <Button color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
}
