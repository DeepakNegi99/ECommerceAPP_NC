import { useState } from "react";
import NavBar from "./NavBar";
import {
  Box,
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palletType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: palletType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Box
          sx={{
            minHeight: "100vh",
            backgroundColor: darkMode
              ? "radial-gradient(circle, #1e3a4a, #111B27)"
              : "radial-gradient(circle, #baecf9, #f0f9ff)",
            py: 6,
          }}
        >
          <Container maxWidth="xl" sx={{ mt: 8 }}>
            <Outlet />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
