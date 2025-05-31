import { useUser } from "../context/UserContext";
import { Typography, Box } from "@mui/material";

export default function Summary() {
  const { user } = useUser();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Resumen de registro</Typography>

      {user.name ? (
        <>
          <Typography><b>Nombre:</b> {user.name}</Typography>
          <Typography><b>Email:</b>  {user.email}</Typography>
          {user.age && <Typography><b>Edad:</b> {user.age}</Typography>}
        </>
      ) : (
        <Typography>No hay datos guardados. Ve a “Register”.</Typography>
      )}
    </Box>
  );
}
