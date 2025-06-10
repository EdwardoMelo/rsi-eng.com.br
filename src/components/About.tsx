import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
  Chip,
  Avatar,
  Stack,
  useTheme,
} from "@mui/material";
import { School, Zap, Shield, Building2, CheckCircle } from "lucide-react";
import rodrigoRegis from "../assets/rodrigoRegis.jpg";
import faixada from "../assets/faixadaRSI.png";
import { faixadaRsi } from "@/assets";

const AboutUs = () => {
  const theme = useTheme();

  const qualifications = [
    "Mestrando em Sistemas Elétricos de Potência - UFRGS (2025)",
    "Pós-graduação em Sistemas Elétricos de Potência - UTFPR (2026)",
    "Pós-graduação em Engenharia de Segurança Contra Incêndio - UFRGS (2022)",
    "Pós-graduação em Engenharia de Segurança do Trabalho - Feevale (2020)",
    "Graduação em Engenharia Elétrica - UNISINOS (2017)",
  ];

  const expertise = [
    {
      icon: Zap,
      title: "Sistemas Elétricos de Potência",
      desc: "Projetos de subestações de alta tensão",
    },
    {
      icon: Shield,
      title: "Segurança do Trabalho",
      desc: "PGR, LTCAT, LIP e perícias técnicas",
    },
    {
      icon: Building2,
      title: "Projetos Multidisciplinares",
      desc: "Elétricos, mecânicos, hidrossanitários e arquitetônicos",
    },
    {
      icon: Zap,
      title: "Automação Industrial",
      desc: "Protocolos IEC 61850, DNP3, IEC104",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#121629",
        py: { xs: 6, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 6 } }}>
        {/* CEO Section */}
        {/* Company Section */}
        <Box mb={10}>
          <Card
            sx={{
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: 8,
              overflow: "hidden",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(6px)",
            }}
          >
            <CardContent sx={{ p: { xs: 3, lg: 6 } }}>
              <Grid
                container
                spacing={6}
                alignItems="center"
                justifyContent="center"
              >
                <Grid size={{ xs: 12, lg: 6 }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#fff", fontWeight: "bold", mb: 3 }}
                  >
                    Sobre a RSI Engenharia
                  </Typography>
                  <Typography
                    sx={{
                      color: "#dbeafe",
                      fontSize: 18,
                      mb: 4,
                      lineHeight: 1.6,
                    }}
                  >
                    Empresa líder em soluções de engenharia, especializada em
                    projetos elétricos, mecânicos, hidrossanitários e
                    arquitetônicos. Desenvolvemos projetos de subestações,
                    cálculos de curto-circuito e estudos de seletividade para
                    sistemas de potência.
                  </Typography>
                  <Stack spacing={2}>
                    {[
                      "Projetos de Subestações de alta tensão",
                      "Automação com Protocolos IEC 61850, DNP3",
                      "Consultoria em Segurança do Trabalho",
                    ].map((item, idx) => (
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        key={idx}
                      >
                        <CheckCircle color="#60a5fa" size={20} />
                        <Typography sx={{ color: "#dbeafe" }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      overflow: "hidden",
                      width: "100%",
                      height: { xs: 200, lg: 320 },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={faixadaRsi}
                      alt="Escritório da RSI Engenharia"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box mb={10}>
          <Card
            sx={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: 8,
              overflow: "hidden",
              minHeight: 400,
            }}
          >
            <Grid container>
              <Grid size={{ xs: 12, lg: 6 }}>
                <CardContent sx={{ p: { xs: 3, lg: 6 } }}>
                  <Chip
                    label="CEO & Fundador"
                    sx={{
                      background: "linear-gradient(to right, #2563eb, #4f46e5)",
                      color: "#fff",
                      fontSize: 16,
                      py: 1,
                      px: 2,
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: { xs: 32, md: 40 },
                    }}
                  >
                    Rodrigo Regis
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#60a5fa",
                      fontWeight: 600,
                      mb: 3,
                      fontSize: 20,
                    }}
                  >
                    Engenheiro Eletricista | Mestrando em Engenharia | MBA
                  </Typography>
                  <Typography
                    sx={{
                      color: "#d1d5db",
                      fontSize: 18,
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    Líder visionário com mais de 20 anos de experiência em
                    engenharia elétrica, especializado em sistemas de potência,
                    automação de subestações e segurança do trabalho.
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, lg: 6 }}>
                      <Card
                        sx={{
                          background: "rgba(37,99,235,0.3)",
                          border: "1px solid rgba(37,99,235,0.3)",
                          textAlign: "center",
                        }}
                      >
                        <CardContent sx={{ p: 2 }}>
                          <Typography
                            variant="h4"
                            sx={{ color: "#60a5fa", fontWeight: "bold" }}
                          >
                            20+
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#9ca3af" }}>
                            Anos de Experiência
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 6 }}>
                      <Card
                        sx={{
                          background: "rgba(79,70,229,0.3)",
                          border: "1px solid rgba(79,70,229,0.3)",
                          textAlign: "center",
                        }}
                      >
                        <CardContent sx={{ p: 2 }}>
                          <Typography
                            variant="h4"
                            sx={{ color: "#818cf8", fontWeight: "bold" }}
                          >
                            138kV
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#9ca3af" }}>
                            Máxima Tensão
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
              <Grid size={{ xs: 12, lg: 6 }}>
                <CardMedia
                  component="img"
                  image={rodrigoRegis}
                  alt="Rodrigo Regis - CEO da RSI Engenharia"
                  sx={{
                    width: "100%",
                    height: { xs: 250, lg: "100%" },
                    objectFit: "cover",
                  }}
                />
              </Grid>
            </Grid>
          </Card>
        </Box>

        {/* Qualifications */}
        <Box mb={10}>
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h4"
              sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}
            >
              Formação Acadêmica
            </Typography>
            <Typography variant="h6" sx={{ color: "#9ca3af" }}>
              Excelência educacional e especialização técnica
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {qualifications.map((qual, index) => (
              <Grid size={{ xs: 12, lg: 6, xl: 4 }} key={index}>
                <Card
                  sx={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.3s",
                    height: "100%",
                    "&:hover": {
                      background: "rgba(255,255,255,0.08)",
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{
                          bgcolor:
                            "linear-gradient(to right, #2563eb, #4f46e5)",
                          background:
                            "linear-gradient(to right, #2563eb, #4f46e5)",
                          width: 48,
                          height: 48,
                        }}
                      >
                        <School color="white" size={28} />
                      </Avatar>
                      <Typography
                        sx={{
                          color: "#d1d5db",
                          fontWeight: 500,
                          fontSize: 16,
                        }}
                      >
                        {qual}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Expertise Areas */}
        <Box mb={10}>
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h4"
              sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}
            >
              Áreas de Especialização
            </Typography>
            <Typography variant="h6" sx={{ color: "#9ca3af" }}>
              Soluções técnicas de alta qualidade e inovação
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {expertise.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
                <Card
                  sx={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    textAlign: "center",
                    transition: "all 0.3s",
                    height: "100%",
                    "&:hover": {
                      background: "rgba(255,255,255,0.08)",
                      transform: "translateY(-16px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        mx: "auto",
                        mb: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(to right, #2563eb, #4f46e5)",
                        transition: "transform 0.3s",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                    >
                      <item.icon color="#fff" size={32} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#fff", fontWeight: "bold", mb: 2 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#9ca3af" }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
