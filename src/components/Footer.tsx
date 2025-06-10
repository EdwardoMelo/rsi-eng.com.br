
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.default", color: "white", pt: 6, pb: 4 }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              RSI Engenharia
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Oferecemos soluções completas em projetos de engenharia, com foco
              na qualidade e satisfação dos nossos clientes.
            </Typography>
            <Stack direction="row" spacing={1}>
             
              <IconButton
                onClick={() =>
                  window.open("https://www.instagram.com/rsiengenharia/")
                }
                color="inherit"
                aria-label="Instagram"
                size="small"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open("https://www.linkedin.com/company/rsiengenharia/")
                }
                color="inherit"
                aria-label="LinkedIn"
                size="small"
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Links Úteis
            </Typography>
            <Stack spacing={1}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="hover"
              >
                Início
              </Link>
              <Link
                component={RouterLink}
                to="/sobre"
                color="inherit"
                underline="hover"
              >
                Sobre
              </Link>
              <Link
                component={RouterLink}
                to="/solucoes"
                color="inherit"
                underline="hover"
              >
                Soluções
              </Link>
              <Link
                component={RouterLink}
                to="/projetos"
                color="inherit"
                underline="hover"
              >
                Projetos
              </Link>
              <Link
                component={RouterLink}
                to="/clientes"
                color="inherit"
                underline="hover"
              >
                Clientes
              </Link>
              <Link
                component={RouterLink}
                to="/contato"
                color="inherit"
                underline="hover"
              >
                Contato
              </Link>
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Contato
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="body2">
                  Platinum Executive Center Rua São Joaquim, 611 - Sala 1004
                  Centro - São Leopoldo/RS
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "start" }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Stack sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body2">(51) 98191-1730</Typography>
                </Stack>
              </Box>
              <Box sx={{ display: "flex", alignItems: "start" }}>
                <EmailIcon sx={{ mr: 1 }} />
                <Stack direction="column">
                  <Typography variant="body2">
                    comercial@rsi-eng.com.br
                  </Typography>
                  <Typography variant="body2">
                    engenharia@rsi-eng.com.br
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: 1,
            borderColor: "rgba(255, 255, 255, 0.1)",
            mt: 5,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="grey.300">
            © {new Date().getFullYear()} RSI Engenharia. Todos os direitos
            reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
