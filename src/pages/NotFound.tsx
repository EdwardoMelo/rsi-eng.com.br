
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ 
        flexGrow: 1, 
        paddingTop: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Container sx={{ py: 5, textAlign: 'center' }}>
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '5rem', md: '7rem' },
            fontWeight: 'bold', 
            color: '#1565C0', 
            mb: 2 
          }}>
            404
          </Typography>
          <Typography variant="h4" sx={{ 
            fontWeight: 'bold', 
            color: '#424242', 
            mb: 3 
          }}>
            Página não encontrada
          </Typography>
          <Typography variant="body1" sx={{ 
            color: '#757575', 
            maxWidth: '500px', 
            mx: 'auto', 
            mb: 4 
          }}>
            A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
          </Typography>
          <Button 
            component={Link} 
            to="/" 
            variant="contained" 
            color="primary" 
            sx={{ px: 3, py: 1 }}
          >
            Voltar para a página inicial
          </Button>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default NotFound;
