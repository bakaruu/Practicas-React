import {
  Container,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import useWeather from "./hooks/useWeather";

export default function App() {
  const [input, setInput] = useState("");
  const { weather, loading, error, fetchByCity } = useWeather();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchByCity(input);
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        El Tiempo v2
      </Typography>

      {/* ------- formulario ------- */}
      <Box component="form" onSubmit={onSubmit} sx={{ display: "grid", gap: 2 }}>
        <TextField
          label="Ciudad"
          value={input}
          size="small"
          fullWidth
          required
          error={Boolean(error)}
          helperText={error ?? ""}
          onChange={(e) => setInput(e.target.value)}
        />

        <LoadingButton
          type="submit"
          variant="contained"
          loading={loading}
          loadingIndicator="Buscando…"
        >
          Buscar
        </LoadingButton>
      </Box>

      {/* ------- resultado ------- */}
      {weather && (
        <Box
          sx={{
            mt: 4,
            display: "grid",
            gap: 2,
            textAlign: "center",
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4">
            {weather.city}, {weather.country}
          </Typography>

          <Box
            component="img"
            src={weather.icon}
            alt={weather.conditionText}
            sx={{ width: 96, height: 96, m: "0 auto" }}
          />

          <Typography variant="h2">{weather.temp} ºC</Typography>
          <Typography variant="h5">{weather.conditionText}</Typography>
        </Box>
      )}
    </Container>
  );
}
