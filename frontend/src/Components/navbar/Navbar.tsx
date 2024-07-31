import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import ThemeSwitch from './ThemeSwitch';
import NavMenu from './NavMenu';
import NavDrawer from './NavDrawer';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, ml: 2 }}>
            Joy's Blog
          </Typography>
          <ThemeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <NavDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
            </>
          ) : (
            <NavMenu />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
