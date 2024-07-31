import React from 'react';
import { Button, Container, Grid, Typography, Paper } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to my blog
            </Typography>
            
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="body1">
              aaa aaa
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
