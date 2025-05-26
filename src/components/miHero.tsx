import { Box, Typography, Button } from "@mui/material";

export default function MiHero() {
  return (
    <Box
      sx={{
        height: { xs: 280, md: 340 },
        backgroundImage:
          "url(https://images.unsplash.com/photo-1526403220430-f4aa4c769dbe?auto=format&fit=crop&w=1350&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "common.white",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h3" fontWeight={700}>
        Bienvenido a MUI Landing
      </Typography>
      <Typography variant="h6" sx={{ mt: 1, mb: 3, maxWidth: 600 }}>
        Todo lo que necesitas para arrancar tus proyectos con React + Material UI
      </Typography>
      <Button variant="contained" size="large" color="secondary">
        ¡Empieza ahora!
      </Button>
    </Box>
  );
}
