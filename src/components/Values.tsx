import { Card, CardContent, Typography, Box, Grid, Container } from "@mui/material";
import {
  EmojiPeople,
  Handshake,
  MenuBook,
  Star,
} from "@mui/icons-material";
import { blue } from "@mui/material/colors";

const values = [
  {
    icon: "commitment",
    title: "COMPROMETIMENTO",
    description: "Somos comprometidos em atender todos os requisitos do cliente"
  },
  {
    icon: "honesty",
    title: "HONESTIDADE E TRANSPARÊNCIA",
    description: "Prezamos pela honestidade e transparência para com nosso cliente."
  },
  {
    icon: "knowledge",
    title: "CONHECIMENTO",
    description: "Desenvolver soluções baseadas no conhecimento."
  },
  {
    icon: "excellence",
    title: "EXCELÊNCIA E QUALIDADE",
    description: "Prezamos pela qualidade no serviço realizado."
  }
];

const iconMap: Record<string, React.ReactNode> = {
  commitment: <Handshake sx={{ fontSize: 48, color: "white" }} />,
  honesty: <EmojiPeople sx={{ fontSize: 48, color: "white" }} />,
  knowledge: <MenuBook sx={{ fontSize: 48, color: "white" }} />,
  excellence: <Star sx={{ fontSize: 48, color: "white" }} />,
};

const ValueCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <Card
    sx={{
      backgroundColor: 'transparent',
      color: 'white',
      border: "none",
      boxShadow: 'none',
      maxWidth: 300,
      borderRadius: 3,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    
    }}
  >
    <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <Box
        sx={{
          mb: 2,
          bgcolor: "primary.light",
          color: "white",
          p: 2,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {iconMap[icon]}
      </Box>
      <Typography  component="h3" sx={{ fontWeight: "bold", mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const Values = () => (
  <Box sx={{   height: 'fit-content', py: { xs: 6, md: 1 },}}>
    <Box sx={{width: '100%'}}>
      <Grid container spacing={4}  justifyContent="center" >
        {values.map((value, index) => (
          <Box>
            <ValueCard
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          </Box>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default Values;
