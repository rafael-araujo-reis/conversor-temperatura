import { Background } from "./components/Background";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Summary />
      <Background />
      <GlobalStyle />
    </>
  );
}
