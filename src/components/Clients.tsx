import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import  {
  ambevLogo,
  campoBomLogo,
  dmaeLogo,
  dolphinLogo,
  gestampLogo,
  glpLogo,
  gmLogo,
  grizaLogo,
  hdsLogo,
  heinekenLogo,
  inBettaLogo,
  lambLogo,
  pirelliLogo,
  potencialLogo,
  prometeonLogo,
  randomLogo,
  rennerLogo,
  spmLogo,
  unifertilLogo,
  xppLogo,
  zaffariLogo,
} from "@/assets";


const clients =[
  {
    id: 1,
    name: "Ambev",
    image: ambevLogo,
  },
  {
    id: 2,
    name: "Campo Bom",
    image: campoBomLogo,
  },
  {
    id: 3,
    name: "DMAE",
    image: dmaeLogo,
  },
  {
    id: 4,
    name: "Dolphin",
    image: dolphinLogo,
  },
  {
    id: 5,
    name: "Gestamp",
    image: gestampLogo,
  },
  {
    id: 6,
    name: "GLP",
    image: glpLogo,
  },
  {
    id: 7,
    name: "GM",
    image: gmLogo,
  },
  {
    id: 8,
    name: "Griza",
    image: grizaLogo,
  },
  {
    id: 9,
    name: "HDS",
    image: hdsLogo,
  },
  {
    id: 10,
    name: "Heineken",
    image: heinekenLogo,
  },
  {
    id: 11,
    name: "InBetta",
    image: inBettaLogo,
  },
  {
    id: 12,
    name: "Lamb",
    image: lambLogo,
  },
  {
    id: 13,
    name: "Pirelli",
    image: pirelliLogo,
  },
  {
    id: 14,
    name: "Potencial",
    image: potencialLogo,
  },
  {
    id: 15,
    name: "Prometeon",
    image: prometeonLogo,
  },
  {
    id: 16,
    name: "Random",
    image: randomLogo,
  },
  {
    id: 17,
    name: "Renner",
    image: rennerLogo,
  },
  {
    id: 18,
    name: "SPM",
    image: spmLogo,
  },
  {
    id: 19,
    name: "Unifertil",
    image: unifertilLogo,
  },
  {
    id: 20,
    name: "XPP",
    image: xppLogo,
  },
  {
    id: 21,
    name: "Zaffari",
    image: zaffariLogo,
  },
]

const Clients = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        background: `#121629`,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('/images/circuit-pattern.png')",
          opacity: 0.1,
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              color: "white",
              fontWeight: "600",
              mb: 12,
              fontFamily: "Poppins",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -16,
                left: "50%",
                transform: "translateX(-50%)",
                width: 100,
                height: 4,
                backgroundColor: theme.palette.primary.main,
                borderRadius: 2,
              },
            }}
          >
            Nossos Clientes
          </Typography>
          <Typography
            align="center"
            sx={{
              color: "grey.300",
              fontSize: { xs: 18, md: 22 },
              mb: 10,
              fontFamily: "Poppins",
              fontWeight: 400,
              letterSpacing: 0.5,
            }}
          >
            Empresas que confiam na RSI Engenharia para soluções inovadoras e
            resultados de excelência.
          </Typography>
        </motion.div>
      </Container>

      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          animation: "scroll 40s linear infinite",
          "&:hover": {
            animationPlayState: "paused",
          },
          "@keyframes scroll": {
            "0%": {
              transform: "translateX(0)",
            },
            "100%": {
              transform: "translateX(-50%)",
            },
          },
        }}
      >
        {/* Duplicate the clients array to create the infinite effect */}
        {[...clients, ...clients].map((client, index) => (
          <motion.div
            key={`${client.id}-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              sx={{
                width: 300,
                height: 200,
                mx: 2,
                backgroundColor: "white",
                backdropFilter: "blur(10px)",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: `0 10px 20px rgba(0, 0, 0, 0.3)`,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={client.image}
                alt={client.name}
                sx={{
                  objectFit: "contain",
                  filter: "brightness(0.9) contrast(1.1)",
                }}
              />
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Clients;
