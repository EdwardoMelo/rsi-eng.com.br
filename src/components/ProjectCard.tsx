import { Card, CardMedia, CardContent, Typography, Box, Button, DialogActions, DialogContent, Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard = ({ title, description, image }: ProjectCardProps) => { 
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card
        sx={{
          bgcolor: "rgba(20, 20, 30, 0.45)",
          color: "white",
          borderRadius: 0,
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          p: 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: { 
            xs : 600,
            sm: 500
          },
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.18)",
          margin: 2,
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ width: "100%", height: 240, objectFit: "cover" }}
          />
          {/* Ícone fictício no canto inferior esquerdo */}
          <Box
            sx={{
              position: "absolute",
              left: 16,
              bottom: 16,
              bgcolor: "rgba(0,0,0,0.7)",
              borderRadius: "50%",
              p: 1,
            }}
          >
            <svg width="24" height="24" fill="white">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </Box>
        </Box>
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            p: 3,
          }}
        >
          <Typography
            textAlign="center"
            sx={{ color: "white", fontWeight: 600, lineHeight: 1.2 }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "grey.200", mt: 1 }}>
            {description.length > 120
              ? description.slice(0, 120) + "..."
              : description}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              mt: 2,
              fontWeight: 600,
              borderRadius: 0,
              px: 3,
              alignSelf: "center",
            }}
            onClick={() => setOpen(true)}
          >
            Ver mais
          </Button>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          sx={{
            fontWeight: 700,
            bgcolor: "#181c25",
            fontSize: 28,
            color: "white",
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            bgcolor: "#181c25",
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                borderRadius: 8,
                boxShadow: "0 8px 32px #0007",
              }}
            />
          </Box>
          <Box sx={{ flex: 2, color: "white" }}>
            <Typography
              variant="body1"
              sx={{ color: "#e0e0e0", fontSize: 18, lineHeight: 1.7 }}
            >
              {description}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ bgcolor: "#181c25" }}>
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
            color="primary"
            sx={{
              px: 3,
              py: 1,
              width: "fit-content",
              borderRadius: 0,
              fontSize: "1rem",
              textTransform: "none",
              letterSpacing: 0.5,
              "&:hover": {
                backgroundColor: "#00bbf0",
                color: "black",
                boxShadow: "0 0 0 4px #00bbf0, 0 8px 24px rgba(0,187,240,0.2)",
                transform: "scale(1.05)",
                transition: "all 0.3s ",
              },
            }}
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
      {/* <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: 28, color: "#10131a" }}>
          {title}
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            bgcolor: "#181c25",
          }}
        >
          <Box
            sx={{
              flex: 1,
              minWidth: 280,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                maxWidth: 400,
                borderRadius: 8,
                boxShadow: "0 8px 32px #0007",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 2,
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "#e0e0e0", fontSize: 18, lineHeight: 1.7 }}
            >
              {description}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ bgcolor: "#181c25" }}>
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
            color="primary"
            sx={{ fontWeight: 600 }}
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};

export default ProjectCard;
