import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SolutionCard = ({
  title,
  description,
  image,
  items,
}: {
  title: string;
  description: string;
  image: string;
  items: string[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        sx={{
          bgcolor: "#10131a",
          borderTop: "1px solid #00bbf0",
          color: "white",
          borderRadius: 0,
          boxShadow: 0,
          margin: 2,
          p: 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: {
            xs: 600,
            sm: 500,
          },
       
          position: "relative",
        }}
      >
        <Box sx={{ height: "100%", overflow: "hidden", position: "absolute" }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.45) 60%, #10131a 100%)",
              zIndex: 1,
            }}
          />
        </Box>
        <CardContent
          sx={{
            flexGrow: 1,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            position: "absolute",

            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            p: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: 700, mb: 1 }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              flex: 1,
              minHeight: 0,
              overflow: "hidden",
              mb: 2,
              padding: 1,
            }}
          >
            <List sx={{ p: 0, m: 0, overflow: "hidden" }}>
              {items.slice(0, 4).map((item, idx) => (
                <ListItem key={idx} sx={{ color: "#e0e0e0", pl: 0, py: 1 }}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <FiberManualRecordIcon
                      sx={{ height: 10, width: 10, color: "primary.light" }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontFamily: "Poppins",
                        fontSize: "14px",
                      }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                </ListItem>
              ))}
              {items.length > 4 && (
                <ListItem sx={{ color: "#bdbdbd", pl: 0, py: 0.5 }}>
                  <ListItemText primary={`...`} />
                </ListItem>
              )}
            </List>
          </Box>
          <Button
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
            onClick={() => setOpen(true)}
          >
            Saiba mais
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
            <List>
              {items.map((item, idx) => (
                <ListItem key={idx} sx={{ color: "#e0e0e0", pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <FiberManualRecordIcon
                      sx={{ color: "primary.light", height: 10, width: 10 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
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
    </>
  );
};
export default SolutionCard;
