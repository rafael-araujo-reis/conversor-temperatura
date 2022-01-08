import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { TemperatureProvider } from "./hooks";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <TemperatureProvider>
      <Header />
      <Dashboard />
      <Summary />
      <GlobalStyle />
    </TemperatureProvider>
  );
}
