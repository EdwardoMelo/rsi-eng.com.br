import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import contactBanner from '../assets/conatct-banner.jpg'
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#42a5f5",
    },
    background: {
      default: "#000000",
      paper: "rgba(30, 58, 138, 0.2)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#e3f2fd",
    },
  },
});

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #121629 50%,  #060608  100%)",
          py: 8,
          px: 2,
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: "white",
                mb: 3,
              }}
            >
              Entre em Contato
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
              Transforme suas ideias em realidade. Nossa equipe está pronta para
              criar soluções extraordinárias que superarão suas expectativas.
            </Typography>
          </Box>
          <Box display="flex" sx={{flexDirection: { xs: "column", md: "row" }}} gap={2} width="100%">
            <Box flex={1}>
              <Card
                sx={{
                  background: "rgba(30, 58, 138, 0.3)",
                  padding: 4,
                  boxShadow: 3,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardContent sx={{ width: "100%" }}>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ width: "100%" }}
                    noValidate
                  >
                    <Stack spacing={3}>
                      <TextField
                        label="Nome"
                        name="name"
                        variant="outlined"
                        fullWidth
                        required
                        InputProps={{
                          startAdornment: (
                            <Avatar
                              sx={{
                                bgcolor: "primary.light",
                                width: 32,
                                height: 32,
                                mr: 1,
                              }}
                            >
                              <MessageSquare size={18} />
                            </Avatar>
                          ),
                        }}
                      />
                      <TextField
                        label="E-mail"
                        name="email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                        InputProps={{
                          startAdornment: (
                            <Avatar
                              sx={{
                                bgcolor: "primary.light",
                                width: 32,
                                height: 32,
                                mr: 1,
                              }}
                            >
                              <Mail size={18} />
                            </Avatar>
                          ),
                        }}
                      />
                      <TextField
                        label="Telefone"
                        name="phone"
                        type="tel"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <Avatar
                              sx={{
                                bgcolor: "primary.light",
                                width: 32,
                                height: 32,
                                mr: 1,
                              }}
                            >
                              <Phone size={18} />
                            </Avatar>
                          ),
                        }}
                      />
                      <TextField
                        label="Mensagem"
                        name="message"
                        variant="outlined"
                        fullWidth
                        required
                        multiline
                        minRows={4}
                        InputProps={{
                          startAdornment: (
                            <Avatar
                              sx={{
                                bgcolor: "primary.light",
                                width: 32,
                                height: 32,
                                mr: 1,
                              }}
                            >
                              <MapPin size={18} />
                            </Avatar>
                          ),
                        }}
                      />
                      <Button
                        variant="contained"
                        sx={{
                          px: 3,
                          py: 1.5,
                          width: "fit-content",
                          borderRadius: 0,
                          fontSize: "1.1rem",
                          "&:hover": {
                            backgroundColor: "#00bbf0",
                            color: "black",
                            boxShadow:
                              "0 0 0 4px #00bbf0, 0 8px 24px rgba(0,187,240,0.2)",
                            transform: "scale(1.05)",
                            transition: "all 0.3s ",
                          },
                        }}
                      >
                        Enviar mensagem
                      </Button>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid gray"
              sx={{ borderRadius: "12px" }}
            >
              {/* Replace with your image */}
              <img
                src={contactBanner}
                alt="Contato"
                style={{
                  maxWidth: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 12,
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Contact;
