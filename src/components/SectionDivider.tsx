import { Box, Container, Typography } from "@mui/material";
import americaSul from "../assets/america-sul.png";

const SectionDivider = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#060608",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        overflow: "hidden",
        maxHeight: {
          xs: 600,
          sm: 500,
          md: 400,
        },
        py: 2,
      }}
    >
      <Box
        component="img"
        src={americaSul}
        alt="Mapa da América do Sul"
        sx={{
          zIndex: 30,
          left: 0,
          maxWidth: 500,
        }}
      />
      <Container
        sx={{
          gap: 4,
        }}
      >
        <Typography
          fontSize={24}
          sx={{
            color: "white",
            fontStyle: "italic",
            flex: 1,
            fontWeight: "bold",
            textAlign: "right",
            fontFamily: "Poppins",
            padding: 2,
          }}
        >
          Projetos com assinatura da RSI Engenharia em todas as regiões do
          Brasil
        </Typography>
      </Container>
    </Box>
  );
};

export default SectionDivider;
