
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Button, 
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/RSI-LOGO.png';

const pages = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Soluções', path: '/solucoes' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Clientes', path: '/clientes' },
  { name: 'Contato', path: '/contato' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpenNavMenu = () => {
    setMobileOpen(true);
  };

  const handleCloseNavMenu = () => {
    setMobileOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "black",
        boxShadow: "none",
        height: "fit-content",
        padding: 1,
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          px: { xs: 1, sm: 2, md: 4 },
          width: "90%",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            minHeight: 80,
            px: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo for larger screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              mr: 2,
              minWidth: 180,
            }}
          >
            <RouterLink
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="RSI Engenharia Logo"
                sx={{
                  maxHeight: 200,
                  width: 200,
                  backgroundColor: "black",
                  padding: 0,
                  borderRadius: 2,
                }}
              />
            </RouterLink>
          </Box>

          {/* Mobile menu */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              flexGrow: 0,
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={mobileOpen}
              onClose={handleCloseNavMenu}
              sx={{
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: 240,
                },
              }}
            >
              <Box sx={{ pt: 2, pb: 2 }}>
                <List>
                  {pages.map((page) => (
                    <ListItem key={page.name} disablePadding>
                      <ListItemButton
                        component={RouterLink}
                        to={page.path}
                        onClick={handleCloseNavMenu}
                      >
                        <ListItemText primary={page.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>

          {/* Logo for mobile screens */}
          <Box
            component="img"
            src={logo}
            alt="RSI Engenharia Logo"
            sx={{
              display: { 
                sm: 'none',
                xs: 'flex'
              },
              maxHeight: 200,
              width: 200,
              backgroundColor: "black",
              padding: 0,
              borderRadius: 2,
            }}
          />

          {/* Desktop menu */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={RouterLink}
                to={page.path}
                sx={{
                  color: "white",
                  my: 2,
                  display: "block",
                  mx: 1,
                  px: 2,
                  fontWeight: 500,
                  fontSize: "1rem",
                  "&:hover": {
                    color: "#00bbf0",
                    backgroundColor: "rgba(0, 187, 240, 0.08)",
                    transform: "scale(1.08)",
                    fontWeight: "bold",
                    transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
                    boxShadow: "0 2px 8px 0 rgba(0,187,240,0.12)",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
