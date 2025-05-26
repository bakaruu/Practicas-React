import {
  Container,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=`;

export default function App() {
  /* ---------- Estado ---------- */
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
  });

  /* ---------- Handler submit ---------- */
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError({ error: false, message: "" });

    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

      const res = await fetch(API_WEATHER + encodeURIComponent(city));
      const data = await res.json();

      if (data.error) throw { message: data.error.message };

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.code,
        icon: data.current.condition.icon,
        conditionText: data.current.condition.text,
      });
    } catch (ex: any) {
      setError({ error: true, message: ex.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        El Tiempo
      </Typography>

      {/* ---------- Formulario ---------- */}
      <Box
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
        sx={{ display: "grid", gap: 2 }}
      >
        <TextField
          label="Ciudad"
          variant="outlined"
          required
          fullWidth
          size="small"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          error={error.error}
          helperText={error.error ? error.message : ""}
        />

        <LoadingButton
          type="submit"
          variant="contained"
          loading={loading}
          loadingIndicator="Cargando..."
        >
          Buscar
        </LoadingButton>
      </Box>

      {/* ---------- Resultado ---------- */}
      {weather.city && (
        <Box
          sx={{
            mt: 4,
            display: "grid",
            gap: 2,
            textAlign: "center",
            borderRadius: 2,
            p: 3,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4">
            {weather.city}, {weather.country}
          </Typography>

          <Box
            component="img"
            alt={weather.conditionText}
            src={weather.icon}
            sx={{ margin: "0 auto", width: 96, height: 96 }}
          />

          <Typography variant="h2">{weather.temp}ºC</Typography>
          <Typography variant="h5">{weather.conditionText}</Typography>
        </Box>
      )}
    </Container>
  );
}
