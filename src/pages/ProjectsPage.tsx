
import { Box, Typography, Container } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, paddingTop: '80px' }}>
      
        <Projects />
      </Box>
      <Footer />
    </Box>
  );
};

export default ProjectsPage;
