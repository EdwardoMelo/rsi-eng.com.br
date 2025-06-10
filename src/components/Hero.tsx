
import { Box, Typography, Button, Container } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import headerVideo from '../assets/header-video.mp4';
import Values from './Values';
import { blue, cyan } from '@mui/material/colors';

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "black",
        color: "white",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "80px",
      }}
    >
      <Box
        component="video"
        muted
        autoPlay
        loop
        src={headerVideo}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          opacity: 0.5,
          left: 0,
          zIndex: 10,
        }}
      />
      <Box
        sx={{
          pb: 10,
          marginTop: "6rem",
          position: "relative",
          zIndex: 20,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "95%",
            },
            padding: {
              xs: 2,
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              fontStyle: "italic",
              mb: 1,
              fontSize: {
                xs: "1rem",
                sm: "1.125rem",
              },
            }}
          >
            A SOLUÇÃO COMPLETA EM PROJETOS PARA SUA EMPRESA
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.2,
              mb: 3,
              fontSize: {
                xs: "2.5rem",
                sm: "4rem",
              },
            }}
          >
            <Box component="span">Energi</Box>
            <Box component="span" sx={{ color: "white" }}>
              zando progresso
            </Box>
            <br />
            <Box component="span">com enge</Box>
            <Box component="span" sx={{ color: "#00bbf0" }}>
              nharia
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: "600px",
              mb: 4,
              fontSize: { xs: "1.1rem", md: "1.12rem" },
              fontWeight: "normal",
            }}
          >
            A RSI apresenta a seus clientes uma nova experiência relacionada a
            projetos. Com profissionais experientes e qualificados, elabora a
            melhor solução em projetos para você e seu bolso.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=518191-1730&text=Olá, vim pelo site da RSI!",
                "_blank"
              )
            }
            endIcon={<ArrowRightAltIcon />}
            sx={{
              px: 3,
              py: 1.5,
              width: "fit-content",
              borderRadius: 0,
              fontSize: "1.1rem",
              "&:hover": {
                backgroundColor: "#00bbf0",
                color: "black",
                boxShadow: "0 0 0 4px #00bbf0, 0 8px 24px rgba(0,187,240,0.2)",
                transform: "scale(1.05)",
                transition: "all 0.3s ",
              },
            }}
          >
            Solicite seu orçamento
          </Button>
        </Box>

        <Values />
      </Box>
    </Box>
  );
};

export default Hero;
