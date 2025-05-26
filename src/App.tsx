import MiBar from "./components/miBar";
import { CssBaseline} from "@mui/material";
import MiContent from "./components/miContent";

import MiHero from "./components/miHero";

import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <MiBar />
      <MiHero />
      <MiContent />
    </>
  );
}

export default App;
