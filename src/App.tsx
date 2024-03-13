import { LayoutContextProvider } from "./context/layout";
import { SaleContextProvider } from "./context/sale";
import { Routes } from "./routes";

function App() {
  return (
    <LayoutContextProvider>
      <SaleContextProvider>
        <Routes />
      </SaleContextProvider>
    </LayoutContextProvider>
  );
}

export default App;
