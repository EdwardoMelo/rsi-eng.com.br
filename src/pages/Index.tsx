
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutUs from "@/components/About";

const Index = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />
        
        <Solutions />
        <Projects />
        <AboutUs />
        <Clients />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
