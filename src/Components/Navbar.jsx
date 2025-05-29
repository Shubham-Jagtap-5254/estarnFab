import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import './Navbar.css';

const drawerWidth = 240;

const menuItems = [
  'Home',
  'About Us',
  'Reviews',
  'Work Done',
  'Our Team',
  'Contact Us',
];

const sectionIds = {
  'Home': 'home',
  'About Us': 'about',
  'Work Done': 'workdone',
  'Our Team': 'ourteam',
  'Contact Us': 'contact',
  'Reviews': 'reviews',
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleScroll = (section) => {
    const element = document.getElementById(sectionIds[section]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setOpen(false);
    }
  };

  const drawer = (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: open ? 0 : '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      style={{ height: '100%' }}
    >
      <Box
        onClick={toggleDrawer}
        sx={{
          textAlign: 'center',
          bgcolor: 'black',
          color: 'white',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6" sx={{ my: 3 }}>
          Menu
        </Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={() => handleScroll(item)}>
              <ListItemText
                primary={item}
                sx={{ textAlign: 'center' }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </motion.div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', position: 'fixed', zIndex: 1300 }}
      >
        <AppBar position="fixed" sx={{ bgcolor: 'black' }}>
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              px: { xs: 2, sm: 3, md: 5 },
            }}
          >
            <img
              src="logo1.png"
              alt="logo"
              style={{
                height: isMobile ? '50px' : '65px',
                width: isMobile ? '120px' : '150px',
                cursor: 'pointer',
              }}
              onClick={() => handleScroll('Home')}
            />

            {isMobile ? (
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: { md: 3, lg: 5 }, alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Typography
                      className="hover-underline"
                      sx={{
                        cursor: 'pointer',
                        fontSize: { md: '1rem', lg: '1.1rem' },
                        fontWeight: 400,
                      }}
                      onClick={() => handleScroll(item)}
                    >
                      {item}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </motion.div>

      <Drawer
        anchor="right"
        open={isMobile && open}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            bgcolor: 'black',
            color: 'white',
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
