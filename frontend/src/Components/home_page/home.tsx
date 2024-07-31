import React from "react";
import { Button, Container, Grid, Typography, Paper, Avatar } from "@mui/material";
const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
            <img
              src="wallpaper.jpg"
              alt="wallpaper"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Hi, Welcome to my blog
            </Typography>

            <Typography variant="h4" component="h2" gutterBottom>
              My name is JoyLyuYue,
            </Typography>

            <Typography variant="h6" component="h2" gutterBottom>
              I am currently a junior student at Auckland University.
            </Typography>

            <Typography variant="h6" component="h2" gutterBottom>
              I plan to use my blog to document my interests and maintain my study notes.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 4 }}>
            <img
              src="avatar.jpg" 
              alt="avatar"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
