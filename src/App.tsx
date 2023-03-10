import { ThemeProvider } from "styled-components";
import Content from "./components/layout/Content";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}

export default App;
