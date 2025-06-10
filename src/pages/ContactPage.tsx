
import { Box, Typography, Container } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, paddingTop: '80px' }}>
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactPage;
