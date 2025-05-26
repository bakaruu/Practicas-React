// src/pages/DogsPage.tsx
import { useState } from "react";
import { Container, Grid, Typography, Alert } from "@mui/material";
import DogForm from "../components/DogForm";
import DogCard from "../components/DogCard";

interface APIResponse {
  message: string[]; // array de URLs
  status: "success" | "error";
}

export default function DogsPage() {
  const [loading, setLoading] = useState(false);
  const [imgs, setImgs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchDogs = async (breed: string) => {
    setLoading(true);
    setError(null);
    setImgs([]);
    try {
      const res = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/3`
      );
      const data: APIResponse = await res.json();
      if (data.status === "success") {
        setImgs(data.message);
      } else {
        setError("Raza no encontrada");
      }
    } catch (err) {
      setError("Error de red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Dog API – Imágenes por raza
      </Typography>

      <DogForm onSearch={fetchDogs} loading={loading} />

      {error && (
        <Alert severity="error" sx={{ mt: 4, maxWidth: 400, mx: "auto" }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {imgs.map((url, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <DogCard img={url} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
