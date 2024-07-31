import React from 'react';
import { Drawer, Box, List, ListItem, ListItemText } from '@mui/material';
import { Link } from "react-router-dom";

interface NavDrawerProps {
  isOpen: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/articles">
            <ListItemText primary="Articles" />
          </ListItem>
          <ListItem button component={Link} to="/articles/add">
            <ListItemText primary="Add Articles" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default NavDrawer;
