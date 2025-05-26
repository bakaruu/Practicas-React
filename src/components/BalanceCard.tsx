import { Card, CardContent, Typography, Button } from "@mui/material";

export default function BalanceCard() {
  return (
    <Card sx={{ m: 0, width: "100%", height: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Saldo disponible
        </Typography>

        <Typography variant="h4" component="p" color="primary">
          1245 €
        </Typography>

        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Añadir ingreso
        </Button>
      </CardContent>
    </Card>
  );
}
