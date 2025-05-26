import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
} from "@mui/material";

interface Props {
  title: string;
  img: string;
  text: string;
}

export default function MiCard({ title, img, text }: Props) {
  return (
    <Card
      elevation={4}
      sx={{
        width: "100%",
        transition: "transform .2s",
        "&:hover": { transform: "translateY(-4px)" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* imagen ajustada */}
      <CardMedia
        component="img"
        image={img}
        alt={title}
        sx={{
          width: "100%",      // llena el ancho
          height: 180,        // alto fijo (ajústalo si quieres)
          objectFit: "contain", // mantiene proporción sin recorte
          p: 2,               // margen interno opcional
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" textAlign="center" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2" textAlign="center">
          {text}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center", pb: 2 }}>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" size="small">
            Visitar
          </Button>
          <Button variant="outlined" size="small">
            Código
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
