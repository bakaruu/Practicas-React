import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import { useUser } from "../context/UserContext";

export default function Register() {
  const { setUser } = useUser();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name:  fd.get("name")  as string,
      email: fd.get("email") as string,
      age:   fd.get("age")   as string,
    };
    setUser(data);
    e.currentTarget.reset();          // limpia inputs
    alert("Datos guardados en contexto ✔︎");
  }

  return (
    <Box sx={{ p: 3, maxWidth: 400, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>Registro</Typography>

      <Stack component="form" gap={2} onSubmit={onSubmit} autoComplete="off">
        <TextField label="Nombre" name="name" required />
        <TextField label="Email"  name="email" type="email" required />
        <TextField label="Edad"   name="age"   type="number" />

        <Button type="submit" variant="contained">Enviar</Button>
      </Stack>
    </Box>
  );
}
