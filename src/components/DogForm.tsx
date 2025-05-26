import { useState } from "react";
import { Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";   // ← import correcto

interface Props {
  onSearch: (breed: string) => void;
  loading: boolean;
}

export default function DogForm({ onSearch, loading }: Props) {
  const [breed, setBreed] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (breed.trim()) onSearch(breed.trim().toLowerCase());
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "grid", gap: 2, maxWidth: 400, mx: "auto" }}
    >
      <TextField
        label="Raza de perro (en inglés)"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        required
      />

      <LoadingButton            
        variant="contained"
        type="submit"
        loading={loading}
        loadingIndicator="Buscando..."
      >
        Buscar
      </LoadingButton>
    </Box>
  );
}
