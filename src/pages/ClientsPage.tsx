
import { Box, Typography, Container } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";

const ClientsPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, paddingTop: '80px' }}>
        <Clients />
      </Box>
      <Footer />
    </Box>
  );
};

export default ClientsPage;
