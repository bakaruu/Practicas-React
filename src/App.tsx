import { Provider } from "react-redux";
import { store } from "./store";
import Tablero from "./components/Tablero";
import { CssBaseline } from "@mui/material";

export default () => (
  <Provider store={store}>
    <CssBaseline />
    <Tablero />
  </Provider>
);
