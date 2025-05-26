import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const demo = [
  { id: 1, note: "Sueldo", amount: 1200 },
  { id: 2, note: "Supermercado", amount: -75.3 },
  { id: 3, note: "Cine", amount: -12 },
];

export default function TransactionsList() {
  return (
    <Paper sx={{ p: 2, width: "100%", height: "100%" }}>
      <Typography variant="subtitle1" gutterBottom>
        Últimos movimientos
      </Typography>

      <List dense>
        {demo.map((tx) => (
          <ListItem key={tx.id}>
            <ListItemAvatar>
              <Avatar color="inherit" sx={{ bgcolor: tx.amount < 0 ? "error.main" : "success.main" }}>
                {tx.amount < 0 ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={tx.note}
              secondary={`${tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toFixed(2)} €`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
