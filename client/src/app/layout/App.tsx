import { useEffect, useState } from "react";
import { Catalog } from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import NavBar from "./NavBar";
import { Box, Container, createTheme, ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const palletType = darkMode ? "dark" : "light";

    const toggleDarkMode = () => {
       setDarkMode(!darkMode);
    }

  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: palletType === "light" ? "#eaeaea": "#121212" ,
      },
    },
  });

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        <Box
          sx={{
            minHeight: "100vh",
            backgroundColor: darkMode ?  
            'radial-gradient(circle, #1e3a4a, #111B27)' :
            'radial-gradient(circle, #baecf9, #f0f9ff)',
            py: 6,
          }}
        >
          <Container maxWidth="xl" sx={{ mt: 8 }}>
            <Catalog products={products} />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
