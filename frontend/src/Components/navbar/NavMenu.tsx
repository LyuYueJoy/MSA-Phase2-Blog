import React from 'react';
import { Box } from '@mui/material';
import { Link } from "react-router-dom";

const NavMenu: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
      <Link to="/articles" style={{ color: 'inherit', textDecoration: 'none' }}>Articles</Link>
      <Link to="/articles/add" style={{ color: 'inherit', textDecoration: 'none' }}>Add Articles</Link>
    </Box>
  );
};

export default NavMenu;
