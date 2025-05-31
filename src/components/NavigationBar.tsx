// src/components/NavigationBar.tsx
import { AppBar, Toolbar, Button, Stack, IconButton, Tooltip } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import { useColorMode } from "../theme/ColorModeContext";

export default function NavigationBar() {
  const { palette } = useTheme();
  const { toggle } = useColorMode();

  return (
    <AppBar position="static">
      <Toolbar>
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
          <Button component={RouterLink} to="/home" color="inherit">Home</Button>
          <Button component={RouterLink} to="/about" color="inherit">About</Button>
          <Button component={RouterLink} to="/register" color="inherit">Register</Button>
          <Button component={RouterLink} to="/summary" color="inherit">Summary</Button>
        </Stack>

        {/* Botón modo oscuro / claro */}
        <Tooltip title="Toggle theme">
          <IconButton color="inherit" onClick={toggle}>
            {palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
