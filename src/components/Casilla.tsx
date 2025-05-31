import { IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // jugador 2
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"; // jugador 1

interface Props {
  value: "X" | "O" | null;
  onClick: () => void;
}

export default function Casilla({ value, onClick }: Props) {
  return (
    <Paper
      elevation={4}
      sx={{
        width: 102,
        height: 102,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#dff0d8",
      }}
    >
      <IconButton
        disabled={Boolean(value)}
        onClick={onClick}
        sx={{ width: "100%", height: "100%" }}
      >
        {value === "O" && (
          <RadioButtonUncheckedIcon sx={{ fontSize: 90, color: "royalblue" }} />
        )}
        {value === "X" && (
          <CloseIcon sx={{ fontSize: 90, color: "deeppink" }} />
        )}
      </IconButton>
    </Paper>
  );
}