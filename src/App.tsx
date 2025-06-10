
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Snackbar, Alert, createTheme, ThemeProvider } from "@mui/material";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: ["Open-Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#0D47A1",
      light: "#00bbf0",
    },
    background: {
      default: "#060608",
      
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/solucoes" element={<SolutionsPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/clientes" element={<ClientsPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
