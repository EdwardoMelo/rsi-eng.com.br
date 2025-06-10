
import { Box, Typography, Container } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Solutions from "@/components/Solutions";

const SolutionsPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, paddingTop: '80px' }}>
        
        <Solutions />
      </Box>
      <Footer />
    </Box>
  );
};

export default SolutionsPage;
