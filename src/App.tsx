import { LayoutContextProvider } from "./context/layout";
import { Routes } from "./routes";

function App() {
  return (
    <LayoutContextProvider>
      <Routes />
    </LayoutContextProvider>
  );
}

export default App;
